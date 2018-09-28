const path = require('path');
const { app, BrowserWindow, crashReporter, Menu } = require('electron');

app.on('window-all-closed', function() {
  app.quit();
});
app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 300,
    resizable: false,
  });
  mainWindow.loadURL(`file://${path.join(__dirname, 'dist/index.html')}`);
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
  var template = [{
    label: "Application",
    submenu: [
      { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
      { type: "separator" },
      { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }}
    ]}, {
    label: "Edit",
    submenu: [
      { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
      { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
      { type: "separator" },
      { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
      { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
      { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
      { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
    ]}
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
});
