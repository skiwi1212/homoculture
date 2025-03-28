// server/plugins/content.ts
export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('content:file:beforeParse', (file) => {
      if (file._id.startsWith('content:articles:')) {
        // Add reading time
        file.readingTime = calculateReadingTime(file.body)
        
        // Add date if not present
        if (!file.date) {
          file.date = new Date().toISOString()
        }
      }
    })
  })
  