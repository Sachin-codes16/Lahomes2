// import React, { useState } from 'react';

// const ProfileSettingPage = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Profile Button */}
//       <button 
//         onClick={() => setIsOpen(true)}
//         style={profileBtn}
//       >
//         <img 
//           src="/src/assets/images/users/avatar-1.jpg " 
//           alt="profile" 
//           style={profileImg} 
//         />
//       </button>

//       {/* Profile Setting Modal */}
//       {isOpen && (
//         <div style={overlay} onClick={() => setIsOpen(false)}>
//           <div style={modal} onClick={(e) => e.stopPropagation()}>
//             {/* Header */}
//             <div style={header}>
//               <h2 style={title}>Profile Setting</h2>
//               <button style={closeBtn} onClick={() => setIsOpen(false)}>
//                 ✕
//               </button>
//             </div>

//             {/* Content */}
//             <div style={content}>
//               <div style={formContainer}>
//                 {/* Profile Photo */}
//                 <div style={row}>
//                   <label style={label}>Profile Photo</label>
//                   <div style={inputArea}>
//                     <div style={photoRow}>
//                       <img 
//                         src="/src/assets/images/users/avatar-1.jpg " 
//                         alt="profile" 
//                         style={profilePhoto} 
//                       />
//                       <button style={removeLink}>Remove</button>
//                       <button style={updateLink}>Update</button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* First Name & Last Name */}
//                 <div style={row}>
//                   <label style={label}>First Name & Last Name</label>
//                   <div style={inputArea}>
//                     <div style={twoColumns}>
//                       <input 
//                         type="text" 
//                         defaultValue="Joe" 
//                         style={input} 
//                       />
//                       <input 
//                         type="text" 
//                         defaultValue="Dazie" 
//                         style={input} 
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Email Address */}
//                 <div style={row}>
//                   <label style={label}>Email Address</label>
//                   <div style={inputArea}>
//                     <input 
//                       type="email" 
//                       defaultValue="joedazie@gmail.com" 
//                       style={inputFull} 
//                     />
//                   </div>
//                 </div>

//                 {/* Employee ID */}
//                 <div style={row}>
//                   <label style={label}>Employee ID</label>
//                   <div style={inputArea}>
//                     <input 
//                       type="text" 
//                       style={inputFull} 
//                       placeholder="Enter your ID"
//                     />
//                   </div>
//                 </div>

//                 {/* Contact Number */}
//                 <div style={row}>
//                   <label style={label}>Contact Number</label>
//                   <div style={inputArea}>
//                     <input 
//                       type="text" 
//                       style={inputFull} 
//                       placeholder="Enter your contact number"
//                     />
//                   </div>
//                 </div>

//                 {/* Date Of Birth */}
//                 <div style={row}>
//                   <label style={label}>Date Of Birth</label>
//                   <div style={inputArea}>
//                     <input 
//                       type="text" 
//                       style={inputFull} 
//                       placeholder="DD / MM / YYYY"
//                     />
//                   </div>
//                 </div>

//                 {/* Username */}
//                 <div style={row}>
//                   <label style={label}>Username</label>
//                   <div style={inputArea}>
//                     <input 
//                       type="text" 
//                       defaultValue="joe.dazie" 
//                       style={inputFull} 
//                     />
//                   </div>
//                 </div>

//                 {/* Position */}
//                 <div style={row}>
//                   <label style={label}>Position</label>
//                   <div style={inputArea}>
//                     <input 
//                       type="text" 
//                       defaultValue="Manager" 
//                       style={inputFull} 
//                     />
//                   </div>
//                 </div>

//                 {/* Change Password */}
//                 <div style={row }>
//                   <label style={label}>Change Password</label>
//                   <div style={inputArea}>
//                     <div style={passwordRow}>
//                       <input 
//                         type="password" 
//                         style={inputPassword} 
//                         placeholder="Old Password"
//                       />
//                       <input 
//                         type="password" 
//                         style={inputPassword} 
//                         placeholder="New Password"
//                       />
//                       <a href="#" style={forgotLink}>Forgot password?</a>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Update Button */}
//                 <div style={buttonContainer}>
//                   <button style={updateBtn} onClick={() => setIsOpen(false)}>
//                     Update
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// /* ---------- Styles ---------- */

// const profileBtn = {
//   background: 'none',
//   border: 'none',
//   cursor: 'pointer',
//   padding: 0,
//   marginLeft: '12px', 
// };

// const profileImg = {
//   width: 30,
//   height: 30,
//   borderRadius: '50%',
//   objectFit: 'cover',
// };

// const overlay = {
//   position: 'fixed',
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,
//   backgroundColor: 'rgba(0, 0, 0, 0.4)',
//   display: 'flex',
//   alignItems: 'flex-start',
//   justifyContent: 'center',
//   zIndex: 9999,
//   padding: '20px',
//   overflowY: 'auto',
// };

// const modal = {
//   backgroundColor: '#f5f5f5',
//   borderRadius: 0,
//   width: '100%',
//   maxWidth: '100%',
//   minHeight: '100vh',
//   display: 'flex',
//   flexDirection: 'column',
//   marginTop: 0,
// };

// const header = {
//   display: 'flex',
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   padding: '20px 40px',
//   backgroundColor: '#f5f5f5',
// };

// const title = {
//   fontSize: 20,
//   fontWeight: 500,
//   color: '#6b7280',
//   margin: 0,
//   fontWeight:10 ,
// };

// const closeBtn = {
//   background: 'none',
//   border: 'none',
//   cursor: 'pointer',
//   color: '#6b7280',
//   padding: 4,
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   fontSize: 28,
//   lineHeight: 1,
//   width: 36,
//   height: 36,
// };

// const content = {
//   flex: 1,
//   padding: '40px',
//   backgroundColor: '#f5f5f5',
// };

// const formContainer = {
//   maxWidth: 900,
//   margin: '0 auto',
// };

// const row = {
//   display: 'flex',
//   alignItems: 'center',
//   marginBottom: 32,
//   gap: 40,
// };

// const label = {
//   fontSize: 15,
//   fontWeight: 600,
//   color: '#1f2937',
//   minWidth: 220,
//   textAlign: 'left',
// };

// const inputArea = {
//   flex: 1,
//   maxWidth: 600,
// };

// const photoRow = {
//   display: 'flex',
//   alignItems: 'center',
//   gap: 20,
// };

// const profilePhoto = {
//   width: 70,
//   height: 70,
//   borderRadius: 8,
//   objectFit: 'cover',
// };

// const removeLink = {
//   background: 'none',
//   border: 'none',
//   color: '#6b7280',
//   fontSize: 14,
//   fontWeight: 400,
//   cursor: 'pointer',
//   padding: 0,
// };

// const updateLink = {
//   background: 'none',
//   border: 'none',
//   color: '#6b7280',
//   fontSize: 14,
//   fontWeight: 500,
//   cursor: 'pointer',
//   padding: 0,
// };

// const inputFull = {
//   width: '100%',
//   padding: '12px 16px',
//   border: '1px solid #d1d5db',
//   borderRadius: 6,
//   fontSize: 14,
//   color: '#6b7280',
//   outline: 'none',
//   boxSizing: 'border-box',
//   backgroundColor: '#ffffff',
// };

// const twoColumns = {
//   display: 'flex',
//   gap: 16,
// };

// const input = {
//   flex: 1,
//   padding: '12px 16px',
//   border: '1px solid #d1d5db',
//   borderRadius: 6,
//   fontSize: 14,
//   color: '#1f2937',
//   outline: 'none',
//   backgroundColor: '#ffffff',
// };

// const passwordRow = {
//   display: 'flex',
//   gap: 16,
//   alignItems: 'center',
// };

// const inputPassword = {
//   flex: 1,
//   maxWidth: 230,
//   padding: '12px 16px',
//   border: '1px solid #d1d5db',
//   borderRadius: 6,
//   fontSize: 14,
//   color: '#6b7280',
//   outline: 'none',
//   backgroundColor: '#ffffff',
// };

// const forgotLink = {
//   color: '#3b82f6',
//   fontSize: 14,
//   fontWeight: 400,
//   textDecoration: 'none',
//   whiteSpace: 'nowrap',
// };

// const buttonContainer = {
//   marginTop: 50,
//   marginleft:30,
// };

// const updateBtn = {
//   backgroundColor: '#5D7186',
//   color: '#ffffff',
//   border: 'none',
//   borderRadius: 8,
//   padding: '12px 40px',
//   fontSize: 15,
//   fontWeight: 500,
//   cursor: 'pointer',
// };

// export default ProfileSettingPage;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const countryCodes = [
  { code: "+968", short: "om", name: "Oman" },
  { code: "+91",  short: "in", name: "India" },
  { code: "+1",   short: "us", name: "United States" },
  { code: "+44",  short: "gb", name: "United Kingdom" },
  { code: "+92",  short: "pk", name: "Pakistan" },
  { code: "+971", short: "ae", name: "UAE" },
  { code: "+966", short: "sa", name: "Saudi Arabia" },
  { code: "+974", short: "qa", name: "Qatar" },
  { code: "+965", short: "kw", name: "Kuwait" },
  { code: "+973", short: "bh", name: "Bahrain" },
  { code: "+49",  short: "de", name: "Germany" },
  { code: "+33",  short: "fr", name: "France" },
  { code: "+86",  short: "cn", name: "China" },
  { code: "+81",  short: "jp", name: "Japan" },
  { code: "+61",  short: "au", name: "Australia" },
  { code: "+55",  short: "br", name: "Brazil" },
  { code: "+7",   short: "ru", name: "Russia" },
  { code: "+27",  short: "za", name: "South Africa" },
  { code: "+234", short: "ng", name: "Nigeria" },
  { code: "+20",  short: "eg", name: "Egypt" },
];

const ProfileSettingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [search, setSearch] = useState("");
  const [phone, setPhone] = useState("");
const [data, setData] = useState([]);
console.log("data",data);
  const filtered = countryCodes.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.code.includes(search)
  );

 useEffect(() => {
  const fetchManager = async () => {
    try {
      const res = await axios.get(
        "https://alw.checkour.work/marketing/manager/get/",
        {
          params: {
            manager_id: 69
          },
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo2OSwicm9sZSI6Ik1hbmFnZXIiLCJkZXBhcnRtZW50IjoiTWFya2V0aW5nIiwiZXhwIjoxNzczMjUzMjA5LCJpYXQiOjE3NzMxNjY4MDksInRva2VuIjpudWxsfQ.HcnPmcq1TdunAM2KxOF_DCJXvsMikEbuubKWJTzbYhg"
          }
        }
      );
setData(res.data);
      console.log("1234",res.data);
    } catch (error) {
      console.log(error);
    }
  };

  fetchManager();
}, []);

  return (
    <>
      <button onClick={() => setIsOpen(true)} style={profileBtn}>
        <img src="/src/assets/images/users/avatar-1.jpg" alt="profile" style={profileImg} />
      </button>

      {isOpen && (
        <div style={overlay} onClick={() => setIsOpen(false)}>
          <div style={modal} onClick={(e) => e.stopPropagation()}>
            <div style={header}>
              <h2 style={title}>Profile Setting</h2>
              <button style={closeBtn} onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <div style={content}>
              <div style={formContainer}>

                {/* Profile Photo */}
                <div style={row}>
                  <label style={label}>Profile Photo</label>
                  <div style={inputArea}>
                    <div style={photoRow}>
                      <img src="/src/assets/images/users/avatar-1.jpg" alt="profile" style={profilePhoto} />
                      <button style={removeLink}>Remove</button>
                      <button style={updateLink}>Update</button>
                    </div>
                  </div>
                </div>

                {/* First Name & Last Name */}
                <div style={row}>
                  <label style={label}>First Name & Last Name</label>
                  <div style={inputArea}>
                    <div style={twoColumns}>
                      <input type="text" defaultValue="Joe" style={input} />
                      <input type="text" defaultValue="Dazie" style={input} />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div style={row}>
                  <label style={label}>Email Address</label>
                  <div style={inputArea}>
                    <input type="email" defaultValue="joedazie@gmail.com" style={inputFull} />
                  </div>
                </div>

                {/* Employee ID */}
                <div style={row}>
                  <label style={label}>Employee ID</label>
                  <div style={inputArea}>
                    <input type="text" style={inputFull} placeholder="Enter your ID" />
                  </div>
                </div>

                {/* Contact Number */}
                <div style={row}>
                  <label style={label}>Contact Number</label>
                  <div style={inputArea}>
                    <div style={{ display: "flex", border: "1px solid #d1d5db", borderRadius: 6, backgroundColor: "#fff", position: "relative" }}>
                      
                      {/* Flag + Code Button */}
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        style={{
                          display: "flex", alignItems: "center", gap: "6px",
                          padding: "10px 12px", background: "#f9fafb",
                          border: "none", borderRight: "1px solid #d1d5db",
                          cursor: "pointer", fontSize: "14px", whiteSpace: "nowrap",
                          borderRadius: "6px 0 0 6px"
                        }}
                      >
                        <span className={`fi fi-${selectedCountry.short}`} style={{ width: 20, height: 14, display: "inline-block" }}></span>
                        <span style={{ color: "#6b7280" }}>{selectedCountry.code}</span>
                        <span style={{ fontSize: "10px", color: "#6b7280" }}>▼</span>
                      </button>

                      {/* Phone Input */}
                      <input
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Enter your contact number"
                        style={{
                          flex: 1, border: "none", outline: "none",
                          padding: "10px 12px", fontSize: "14px",
                          color: "#6b7280", borderRadius: "0 6px 6px 0"
                        }}
                      />

                      {/* Dropdown */}
                      {dropdownOpen && (
                        <div style={{
                          position: "absolute", top: "100%", left: 0,
                          background: "white", border: "1px solid #d1d5db",
                          borderRadius: 6, zIndex: 99999,
                          width: "260px", maxHeight: "250px",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                          display: "flex", flexDirection: "column"
                        }}>
                          <input
                            type="text"
                            placeholder="Search country..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            style={{
                              border: "none", borderBottom: "1px solid #eee",
                              padding: "8px 12px", outline: "none", fontSize: "13px"
                            }}
                          />
                          <div style={{ overflowY: "auto", maxHeight: "200px" }}>
                            {filtered.map((c, i) => (
                              <div
                                key={i}
                                onClick={() => { setSelectedCountry(c); setDropdownOpen(false); setSearch(""); }}
                                style={{
                                  display: "flex", alignItems: "center", gap: "10px",
                                  padding: "9px 12px", cursor: "pointer", fontSize: "14px",
                                  background: selectedCountry.code === c.code ? "#f0f0f0" : "white"
                                }}
                                onMouseEnter={e => e.currentTarget.style.background = "#f5f5f5"}
                                onMouseLeave={e => e.currentTarget.style.background = selectedCountry.code === c.code ? "#f0f0f0" : "white"}
                              >
                                <span className={`fi fi-${c.short}`} style={{ width: 20, height: 14, display: "inline-block", flexShrink: 0 }}></span>
                                <span>{c.name}</span>
                                <span style={{ marginLeft: "auto", color: "#888" }}>{c.code}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Date Of Birth */}
                <div style={row}>
                  <label style={label}>Date Of Birth</label>
                  <div style={inputArea}>
                    <input type="text" style={inputFull} placeholder="DD / MM / YYYY" />
                  </div>
                </div>

                {/* Username */}
                <div style={row}>
                  <label style={label}>Username</label>
                  <div style={inputArea}>
                    <input type="text" defaultValue="joe.dazie" style={inputFull} />
                  </div>
                </div>

                {/* Position */}
                <div style={row}>
                  <label style={label}>Position</label>
                  <div style={inputArea}>
                    <input type="text" defaultValue="Manager" style={inputFull} />
                  </div>
                </div>

                {/* Change Password */}
                <div style={row}>
                  <label style={label}>Change Password</label>
                  <div style={inputArea}>
                    <div style={passwordRow}>
                      <input type="password" style={inputPassword} placeholder="Old Password" />
                      <input type="password" style={inputPassword} placeholder="New Password" />
                      <a href="#" style={forgotLink}>Forgot password?</a>
                    </div>
                  </div>
                </div>

                {/* Update Button */}
                <div style={buttonContainer}>
                  <button style={updateBtn} onClick={() => setIsOpen(false)}>Update</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* ---------- Styles ---------- */
const profileBtn = { background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: '12px' };
const profileImg = { width: 30, height: 30, borderRadius: '50%', objectFit: 'cover' };
const overlay = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', zIndex: 9999, padding: '20px', overflowY: 'auto' };
const modal = { backgroundColor: '#f5f5f5', borderRadius: 0, width: '100%', maxWidth: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', marginTop: 0 };
const header = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', backgroundColor: '#f5f5f5' };
const title = { fontSize: 20, fontWeight: 10, color: '#6b7280', margin: 0 };
const closeBtn = { background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', padding: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, lineHeight: 1, width: 36, height: 36 };
const content = { flex: 1, padding: '40px', backgroundColor: '#f5f5f5' };
const formContainer = { maxWidth: 900, margin: '0 auto' };
const row = { display: 'flex', alignItems: 'center', marginBottom: 32, gap: 40 };
const label = { fontSize: 15, fontWeight: 600, color: '#1f2937', minWidth: 220, textAlign: 'left' };
const inputArea = { flex: 1, maxWidth: 600 };
const photoRow = { display: 'flex', alignItems: 'center', gap: 20 };
const profilePhoto = { width: 70, height: 70, borderRadius: 8, objectFit: 'cover' };
const removeLink = { background: 'none', border: 'none', color: '#6b7280', fontSize: 14, fontWeight: 400, cursor: 'pointer', padding: 0 };
const updateLink = { background: 'none', border: 'none', color: '#6b7280', fontSize: 14, fontWeight: 500, cursor: 'pointer', padding: 0 };
const inputFull = { width: '100%', padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 14, color: '#6b7280', outline: 'none', boxSizing: 'border-box', backgroundColor: '#ffffff' };
const twoColumns = { display: 'flex', gap: 16 };
const input = { flex: 1, padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 14, color: '#1f2937', outline: 'none', backgroundColor: '#ffffff' };
const passwordRow = { display: 'flex', gap: 16, alignItems: 'center' };
const inputPassword = { flex: 1, maxWidth: 230, padding: '12px 16px', border: '1px solid #d1d5db', borderRadius: 6, fontSize: 14, color: '#6b7280', outline: 'none', backgroundColor: '#ffffff' };
const forgotLink = { color: '#3b82f6', fontSize: 14, fontWeight: 400, textDecoration: 'none', whiteSpace: 'nowrap' };
const buttonContainer = { marginTop: 50 };
const updateBtn = { backgroundColor: '#5D7186', color: '#ffffff', border: 'none', borderRadius: 8, padding: '12px 40px', fontSize: 15, fontWeight: 500, cursor: 'pointer' };

export default ProfileSettingPage;