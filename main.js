const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080,
    fullscreen: true,
    webPreferences: {
        webviewTag: true
    }
  })
  win.fullScreen = true
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})