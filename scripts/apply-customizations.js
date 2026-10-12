import fs from 'fs/promises';
import path from 'path';

async function applyCustomizations() {
  console.log('⚡ Applying Abdou-dashbord custom branding and styles...');

  // 1. Admin Logo
  const adminLogoJs = `import React from 'react';
export default function Logo({ dashboardUrl }) {
    return /*#__PURE__*/ React.createElement("div", {
        className: "logo flex items-center pr-4"
    }, /*#__PURE__*/ React.createElement("a", {
        href: dashboardUrl,
        className: "flex items-center gap-2.5 text-decoration-none group",
        style: { textDecoration: 'none' }
    }, /*#__PURE__*/ React.createElement("svg", {
        viewBox: "0 0 68 42",
        fill: "none",
        style: { width: '36px', height: 'auto' },
        xmlns: "http://www.w3.org/2000/svg"
    }, /*#__PURE__*/ React.createElement("path", {
        d: "M5 35 19 7l14 28M11.5 24h15",
        stroke: "#0f172a",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2.8"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M34 35 48 7l14 28M40.5 24h15",
        stroke: "#0f172a",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2.8"
    }), /*#__PURE__*/ React.createElement("path", {
        d: "M28 38 42 4",
        stroke: "#4f46e5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "3.4"
    })), /*#__PURE__*/ React.createElement("span", {
        style: {
            color: '#0f172a',
            fontFamily: 'Bahnschrift, Aptos, system-ui, sans-serif',
            fontSize: '1.05rem',
            fontWeight: 800,
            letterSpacing: '0.08em'
        }
    }, "Abdou")));
}
export const layout = {
    areaId: 'header',
    sortOrder: 10
};
export const query = \`
  query query {
    dashboardUrl: url(routeId:"dashboard")
  }
\`;
`;

  // 2. Admin Login Logo
  const adminLoginPath = path.resolve('node_modules/@evershop/evershop/dist/modules/auth/pages/admin/adminLogin/LoginForm.js');
  try {
    let loginContent = await fs.readFile(adminLoginPath, 'utf8');
    loginContent = loginContent.replace(
      /React\.createElement\("div", \{ className: "flex items-center justify-center mb-7" \}[\s\S]*?fill: "#008060" \}\)\)\)\),/,
      `React.createElement("div", { className: "flex flex-col items-center justify-center mb-7 gap-2" },
        React.createElement("div", { className: "flex items-center gap-3" },
          React.createElement("svg", {
            viewBox: "0 0 68 42",
            fill: "none",
            style: { width: "52px", height: "auto" },
            xmlns: "http://www.w3.org/2000/svg"
          },
            React.createElement("path", { d: "M5 35 19 7l14 28M11.5 24h15", stroke: "#0f172a", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.8" }),
            React.createElement("path", { d: "M34 35 48 7l14 28M40.5 24h15", stroke: "#0f172a", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2.8" }),
            React.createElement("path", { d: "M28 38 42 4", stroke: "#6366f1", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "3.4" })
          ),
          React.createElement("span", { style: { color: "#0f172a", fontFamily: "Bahnschrift, Aptos, system-ui, sans-serif", fontSize: "1.5rem", fontWeight: "800", letterSpacing: "0.08em" } }, "Abdou")
        )
      ),`
    );
    await fs.writeFile(adminLoginPath, loginContent, 'utf8');
  } catch (err) {
    // Ignore if path not present yet
  }

  // 3. Admin CopyRight
  const copyrightJs = `import React from 'react';
export default function CopyRight({ themeConfig: { copyRight } = {
    copyRight: '© 2026 Abdou-dashbord. All Rights Reserved.'
} }) {
    return (React.createElement("div", { className: "copyright" },
        React.createElement("span", null, copyRight)));
}
export const layout = {
    areaId: 'footerLeft',
    sortOrder: 10
};
export const query = \`
  query query {
    themeConfig {
      copyRight
    }
  }
\`;
`;

  // 4. Admin Version
  const versionJs = `import { _ } from '@evershop/evershop/lib/locale/translate/_';
import PropTypes from 'prop-types';
import React from 'react';
export default function Version({ version }) {
    return (React.createElement("div", { className: "version" },
        React.createElement("span", null, "Abdou-dashbord v1.0")));
}
Version.propTypes = {
    version: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'footerLeft',
    sortOrder: 20
};
export const query = \`
  query query {
    version
  }
\`;
`;

  // 5. Hide Survey
  const surveyJs = `import React from 'react';
export default function Survey() {
    return null;
}
export const layout = {
    areaId: 'content',
    sortOrder: 999
};
`;

  // 6. ai-theme.css (Only replaces green accents)
  const aiThemeCss = `/* Replaced green color with elegant modern Indigo #4f46e5 */
:root {
  --primary: #4f46e5 !important;
}

.nav-item.active::before {
  background-color: #4f46e5 !important;
}

.nav-item.active a {
  color: #4f46e5 !important;
}

.admin-navigation::-webkit-scrollbar-thumb {
  background-color: #4f46e5 !important;
  outline: 1px solid #4f46e5 !important;
}
`;

  // Write admin files safely
  const targets = [
    { file: 'node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js', content: adminLogoJs },
    { file: 'node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js', content: copyrightJs },
    { file: 'node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js', content: versionJs },
    { file: 'node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Survey.js', content: surveyJs },
    { file: 'node_modules/@evershop/evershop/dist/modules/base/pages/admin/all/ai-theme.css', content: aiThemeCss },
    { file: 'node_modules/@evershop/evershop/src/modules/base/pages/admin/all/ai-theme.css', content: aiThemeCss },
  ];

  // Dynamic host helper patch
  const patchHost = async (filePath) => {
    try {
      const fullPath = path.resolve(filePath);
      let code = await fs.readFile(fullPath, 'utf8');
      if (!code.includes('x-forwarded-host')) {
        code = code.replace(
          /const homeUrl = getBaseUrl\(\);/,
          `const host = request.get('x-forwarded-host') || request.get('host');
    const proto = request.get('x-forwarded-proto') || request.protocol;
    const homeUrl = host ? \`\${proto}://\${host}\` : getBaseUrl();`
        );
        await fs.writeFile(fullPath, code, 'utf8');
      }
    } catch {}
  };

  await patchHost('node_modules/@evershop/evershop/dist/modules/base/pages/global/context.js');
  await patchHost('node_modules/@evershop/evershop/dist/modules/base/api/global/context.js');

  for (const { file, content } of targets) {
    try {
      await fs.writeFile(path.resolve(file), content, 'utf8');
    } catch {}
  }

  console.log('✅ Custom branding applied successfully!');
}

applyCustomizations().catch(console.error);
