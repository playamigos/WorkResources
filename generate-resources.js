#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const RESOURCES_DIR = './Resources';
const OUTPUT_FILE = './resources.json';

function scanDirectory(dirPath) {
    const resources = {};
    
    try {
        // Get all items in Resources directory
        const sections = fs.readdirSync(dirPath, { withFileTypes: true });
        
        sections.forEach(section => {
            if (section.isDirectory() && !section.name.startsWith('.')) {
                const sectionPath = path.join(dirPath, section.name);
                const files = fs.readdirSync(sectionPath, { withFileTypes: true });
                
                // Filter for .md files
                const mdFiles = files
                    .filter(file => file.isFile() && file.name.endsWith('.md'))
                    .map(file => file.name);
                
                resources[section.name] = mdFiles;
            }
        });
        
        return resources;
    } catch (error) {
        console.error('Error scanning resources:', error);
        return {};
    }
}

function main() {
    console.log('🔍 Scanning Resources directory...');
    
    if (!fs.existsSync(RESOURCES_DIR)) {
        console.error('❌ Resources directory not found!');
        process.exit(1);
    }
    
    const resources = scanDirectory(RESOURCES_DIR);
    
    // Count total resources
    const totalFiles = Object.values(resources).reduce((sum, files) => sum + files.length, 0);
    
    console.log(`✅ Found ${Object.keys(resources).length} sections with ${totalFiles} resources:`);
    Object.entries(resources).forEach(([section, files]) => {
        console.log(`   📁 ${section}: ${files.length} file(s)`);
        files.forEach(file => console.log(`      - ${file}`));
    });
    
    // Write to JSON file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(resources, null, 2));
    console.log(`\n💾 Generated ${OUTPUT_FILE}`);
}

main();
