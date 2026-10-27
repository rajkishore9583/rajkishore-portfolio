import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultData from '../data/defaultPortfolioData.json';

const PortfolioContext = createContext(null);

const STORAGE_KEY = 'rajkishore_portfolio_data';
const INBOX_STORAGE_KEY = 'portfolio_inbox_messages';
const ADMIN_PASSWORD_KEY = 'rajkishore_admin_custom_password';
const DEFAULT_ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'Raj@Admin2026';

const INITIAL_INBOX_MESSAGES = [
  {
    id: 'msg-1',
    name: 'Sarah Jenkins',
    email: 'sarah.jenkins@enterprise-consulting.com',
    message: 'Hello Rajkishore, we came across your SAP S/4HANA O2C optimization case study and were very impressed with your fit-gap methodology. We would love to discuss an SAP Technology Consultant opening with our cloud practice.',
    date: '2026-10-24 14:32',
    read: false
  },
  {
    id: 'msg-2',
    name: 'Michael Chang',
    email: 'm.chang@digital-supply.io',
    message: 'Hi Rajkishore, I reviewed your Python & SQL Enterprise Data Bottleneck Analyzer. The extraction of VBAK and LIKP cycle times is exactly what our clients need. Are you open for contract or full-time enterprise roles?',
    date: '2026-10-26 09:15',
    read: true
  }
];

export function PortfolioProvider({ children }) {
  // Load Portfolio Data from LocalStorage or fallback to default dataset
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure all required top-level keys exist
        return {
          personalInfo: parsed.personalInfo || defaultData.personalInfo,
          skillsData: parsed.skillsData || defaultData.skillsData,
          experienceData: parsed.experienceData || defaultData.experienceData,
          certificationsData: parsed.certificationsData || defaultData.certificationsData,
          educationData: parsed.educationData || defaultData.educationData,
          projectsData: parsed.projectsData || defaultData.projectsData,
        };
      }
    } catch (e) {
      console.error('Failed to parse portfolio data from storage, using defaults', e);
    }
    return defaultData;
  });

  // Load Contact Form Inbox Messages
  const [inbox, setInbox] = useState(() => {
    try {
      const saved = localStorage.getItem(INBOX_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse inbox from storage', e);
    }
    return INITIAL_INBOX_MESSAGES;
  });

  // Flash toast message state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Admin Password Management with LocalStorage persistence
  const [adminPassword, setAdminPassword] = useState(() => {
    try {
      const saved = localStorage.getItem(ADMIN_PASSWORD_KEY);
      if (saved) return saved;
    } catch (e) {
      console.error('Failed to load admin password from storage', e);
    }
    return DEFAULT_ADMIN_PASSWORD;
  });

  const verifyAdminPassword = (enteredPassword) => {
    return enteredPassword === adminPassword;
  };

  const changeAdminPassword = (currentPassword, newPassword) => {
    if (currentPassword !== adminPassword) {
      return { success: false, error: 'Current password does not match.' };
    }
    if (!newPassword || newPassword.length < 6) {
      return { success: false, error: 'New password must be at least 6 characters long.' };
    }
    try {
      localStorage.setItem(ADMIN_PASSWORD_KEY, newPassword);
      setAdminPassword(newPassword);
      showToast('Admin password updated successfully!', 'success');
      return { success: true };
    } catch (e) {
      console.error('Failed to save new password', e);
      return { success: false, error: 'Failed to save new password to browser storage.' };
    }
  };

  const resetAdminPasswordToDefault = () => {
    try {
      localStorage.removeItem(ADMIN_PASSWORD_KEY);
      setAdminPassword(DEFAULT_ADMIN_PASSWORD);
      showToast('Admin password reset to system default.', 'info');
      return { success: true };
    } catch (e) {
      return { success: false, error: 'Failed to reset password.' };
    }
  };

  // Persist Portfolio Data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to persist portfolio data', e);
    }
  }, [data]);

  // Persist Inbox Messages changes
  useEffect(() => {
    try {
      localStorage.setItem(INBOX_STORAGE_KEY, JSON.stringify(inbox));
    } catch (e) {
      console.error('Failed to persist inbox messages', e);
    }
  }, [inbox]);

  // ================= CRUD: PERSONAL INFO & ABOUT =================
  const updatePersonalInfo = (updatedFields) => {
    setData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        ...updatedFields,
      },
    }));
    showToast('Personal & About details updated successfully!');
  };

  const updateStats = (statsArray) => {
    setData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        stats: statsArray,
      },
    }));
    showToast('Stat counters updated!');
  };

  const toggleAvailability = () => {
    setData((prev) => {
      const current = prev.personalInfo.availableForRoles !== false;
      return {
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          availableForRoles: !current,
        },
      };
    });
    showToast('Role availability status updated!');
  };

  // ================= CRUD: PROJECTS =================
  const addProject = (project) => {
    const newProject = {
      ...project,
      id: project.id || `proj-${Date.now()}`,
    };
    setData((prev) => ({
      ...prev,
      projectsData: [newProject, ...prev.projectsData],
    }));
    showToast('New project created and published!');
  };

  const updateProject = (id, updatedProject) => {
    setData((prev) => ({
      ...prev,
      projectsData: prev.projectsData.map((p) =>
        p.id === id ? { ...p, ...updatedProject } : p
      ),
    }));
    showToast('Project updated successfully!');
  };

  const deleteProject = (id) => {
    setData((prev) => ({
      ...prev,
      projectsData: prev.projectsData.filter((p) => p.id !== id),
    }));
    showToast('Project removed!', 'warning');
  };

  // ================= CRUD: SKILLS =================
  const addSkillCategory = (category, description = '', icon = 'Boxes') => {
    if (data.skillsData.some((c) => c.category.toLowerCase() === category.toLowerCase())) {
      showToast('Category already exists!', 'error');
      return;
    }
    setData((prev) => ({
      ...prev,
      skillsData: [
        ...prev.skillsData,
        {
          category,
          icon,
          description,
          skills: [],
        },
      ],
    }));
    showToast(`Category "${category}" added!`);
  };

  const deleteSkillCategory = (categoryName) => {
    setData((prev) => ({
      ...prev,
      skillsData: prev.skillsData.filter((c) => c.category !== categoryName),
    }));
    showToast(`Category "${categoryName}" deleted!`, 'warning');
  };

  const addSkill = (categoryName, skillObj) => {
    setData((prev) => ({
      ...prev,
      skillsData: prev.skillsData.map((cat) => {
        if (cat.category === categoryName) {
          return {
            ...cat,
            skills: [...cat.skills, skillObj],
          };
        }
        return cat;
      }),
    }));
    showToast(`Skill "${skillObj.name}" added to ${categoryName}!`);
  };

  const updateSkill = (categoryName, skillIndex, updatedSkill) => {
    setData((prev) => ({
      ...prev,
      skillsData: prev.skillsData.map((cat) => {
        if (cat.category === categoryName) {
          const newSkills = [...cat.skills];
          newSkills[skillIndex] = updatedSkill;
          return { ...cat, skills: newSkills };
        }
        return cat;
      }),
    }));
    showToast(`Skill "${updatedSkill.name}" updated!`);
  };

  const deleteSkill = (categoryName, skillIndex) => {
    setData((prev) => ({
      ...prev,
      skillsData: prev.skillsData.map((cat) => {
        if (cat.category === categoryName) {
          const newSkills = cat.skills.filter((_, idx) => idx !== skillIndex);
          return { ...cat, skills: newSkills };
        }
        return cat;
      }),
    }));
    showToast('Skill deleted!', 'warning');
  };

  // ================= CRUD: EXPERIENCE =================
  const addExperience = (exp) => {
    setData((prev) => ({
      ...prev,
      experienceData: [exp, ...prev.experienceData],
    }));
    showToast('Work experience entry added!');
  };

  const updateExperience = (index, updatedExp) => {
    setData((prev) => {
      const newExp = [...prev.experienceData];
      newExp[index] = updatedExp;
      return { ...prev, experienceData: newExp };
    });
    showToast('Work experience updated!');
  };

  const deleteExperience = (index) => {
    setData((prev) => {
      const newExp = prev.experienceData.filter((_, idx) => idx !== index);
      return { ...prev, experienceData: newExp };
    });
    showToast('Work experience entry deleted!', 'warning');
  };

  // ================= CRUD: CERTIFICATIONS =================
  const addCertification = (cert) => {
    setData((prev) => ({
      ...prev,
      certificationsData: [cert, ...prev.certificationsData],
    }));
    showToast('Certification added!');
  };

  const updateCertification = (index, updatedCert) => {
    setData((prev) => {
      const newCerts = [...prev.certificationsData];
      newCerts[index] = updatedCert;
      return { ...prev, certificationsData: newCerts };
    });
    showToast('Certification updated!');
  };

  const deleteCertification = (index) => {
    setData((prev) => {
      const newCerts = prev.certificationsData.filter((_, idx) => idx !== index);
      return { ...prev, certificationsData: newCerts };
    });
    showToast('Certification removed!', 'warning');
  };

  // ================= CRUD: EDUCATION =================
  const addEducation = (edu) => {
    setData((prev) => ({
      ...prev,
      educationData: [...prev.educationData, edu],
    }));
    showToast('Education record added!');
  };

  const updateEducation = (index, updatedEdu) => {
    setData((prev) => {
      const newEdu = [...prev.educationData];
      newEdu[index] = updatedEdu;
      return { ...prev, educationData: newEdu };
    });
    showToast('Education record updated!');
  };

  const deleteEducation = (index) => {
    setData((prev) => {
      const newEdu = prev.educationData.filter((_, idx) => idx !== index);
      return { ...prev, educationData: newEdu };
    });
    showToast('Education record removed!', 'warning');
  };

  // ================= INBOX / MESSAGES =================
  const addInboxMessage = ({ name, email, message }) => {
    const now = new Date();
    const dateStr = now.toISOString().replace('T', ' ').substring(0, 16);
    const newMsg = {
      id: `msg-${Date.now()}`,
      name,
      email,
      message,
      date: dateStr,
      read: false,
    };
    setInbox((prev) => [newMsg, ...prev]);
  };

  const deleteInboxMessage = (id) => {
    setInbox((prev) => prev.filter((m) => m.id !== id));
    showToast('Message deleted.', 'warning');
  };

  const toggleMessageRead = (id) => {
    setInbox((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read: !m.read } : m))
    );
  };

  const clearInbox = () => {
    setInbox([]);
    showToast('All inbox messages cleared.', 'warning');
  };

  // ================= BACKUP & RESTORE =================
  const resetToDefaults = () => {
    setData(defaultData);
    localStorage.removeItem(STORAGE_KEY);
    showToast('Reset all portfolio content to factory defaults!', 'info');
  };

  const exportDataJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data, null, 2));
    const downloadAnchor = document.createElement('a');
    const today = new Date().toISOString().slice(0, 10);
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `rajkishore-portfolio-data-${today}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Backup JSON downloaded successfully!');
  };

  const importDataJSON = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      if (!parsed.personalInfo || !parsed.skillsData || !parsed.projectsData) {
        throw new Error('Invalid format: Missing core sections');
      }
      setData(parsed);
      showToast('Portfolio data imported successfully!');
      return true;
    } catch (e) {
      showToast('Import failed: Invalid JSON file', 'error');
      return false;
    }
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        inbox,
        toast,
        showToast,
        // Personal Info
        updatePersonalInfo,
        updateStats,
        toggleAvailability,
        // Projects
        addProject,
        updateProject,
        deleteProject,
        // Skills
        addSkillCategory,
        deleteSkillCategory,
        addSkill,
        updateSkill,
        deleteSkill,
        // Experience
        addExperience,
        updateExperience,
        deleteExperience,
        // Certifications
        addCertification,
        updateCertification,
        deleteCertification,
        // Education
        addEducation,
        updateEducation,
        deleteEducation,
        // Inbox
        addInboxMessage,
        deleteInboxMessage,
        toggleMessageRead,
        clearInbox,
        // Backup
        resetToDefaults,
        exportDataJSON,
        importDataJSON,
        // Security & Password
        adminPassword,
        verifyAdminPassword,
        changeAdminPassword,
        resetAdminPasswordToDefault,
      }}
    >
      {children}

      {/* Global Animated Toast Notification */}
      {toast && (
        <div className="fixed top-6 right-6 z-[9999] flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#140b28]/95 border border-purple-500/40 text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] backdrop-blur-2xl transition-all duration-300">
          <span className={`w-2.5 h-2.5 rounded-full ${toast.type === 'error' ? 'bg-rose-500 animate-pulse' : toast.type === 'info' ? 'bg-cyan-400' : 'bg-emerald-400 animate-ping'}`} />
          <span className="text-xs sm:text-sm font-semibold tracking-wide">{toast.message}</span>
        </div>
      )}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
}
