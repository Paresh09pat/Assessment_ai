const fs = require('fs-extra');
const path = require('path');

async function copyStorybook() {
  try {
    const sourceDir = path.join(__dirname, '..', 'storybook-static');
    const targetDir = path.join(__dirname, '..', 'public', 'storybook');
    
    // Ensure target directory exists
    await fs.ensureDir(targetDir);
    
    // Copy all files from storybook-static to public/storybook
    await fs.copy(sourceDir, targetDir, { overwrite: true });
    
    console.log('✅ Storybook files copied successfully!');
    console.log(`📁 From: ${sourceDir}`);
    console.log(`📁 To: ${targetDir}`);
  } catch (error) {
    console.error('❌ Error copying Storybook files:', error);
    process.exit(1);
  }
}

copyStorybook();
