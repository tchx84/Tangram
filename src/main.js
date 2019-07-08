(() => {
  "use strict";

  pkg.initGettext();
  pkg.initFormat();
  pkg.require({
    Gio: "2.0",
    Gtk: "3.0",
  });

  // for (const i in pkg) log(`${i}: ${pkg[i]}`);

  const { Gio, Gtk } = imports.gi;
  const { GigagramWindow } = imports.window;

  this.main = function main(argv) {
    const application = new Gtk.Application({
      application_id: "re.sonny.gigagram",
      flags: Gio.ApplicationFlags.FLAGS_NONE,
    });

    application.connect("activate", app => {
      let activeWindow = app.activeWindow;

      if (!activeWindow) {
        activeWindow = new GigagramWindow(app);
      }

      activeWindow.present();
    });

    return application.run(argv);
  };
})();