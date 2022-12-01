import { useEffect, useRef } from "react";

const xtermjsTheme = {
  foreground: "#F8F8F8",
  background: "#2D2E2C",
  selectionBackground: "#5DA5D533",
  black: "#1E1E1D",
  brightBlack: "#262625",
  red: "#CE5C5C",
  brightRed: "#FF7272",
  green: "#5BCC5B",
  brightGreen: "#72FF72",
  yellow: "#CCCC5B",
  brightYellow: "#FFFF72",
  blue: "#5D5DD3",
  brightBlue: "#7279FF",
  magenta: "#BC5ED1",
  brightMagenta: "#E572FF",
  cyan: "#5DA5D5",
  brightCyan: "#72F0FF",
  white: "#F8F8F8",
  brightWhite: "#FFFFFF",
};

export const Terminal = () => {
  const loaded = useRef(false);
  useEffect(() => {
    const container = document.getElementById("terminal");
    (async () => {
      const { Terminal } = await import("xterm");
      const { FitAddon } = await import("xterm-addon-fit");

      let command = "";

      if (container) {
        const terminal = new Terminal({
          theme: xtermjsTheme,
        });
        const fitAddon = new FitAddon();
        terminal.loadAddon(fitAddon);
        // terminal.open(container);
        terminal.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ");
        fitAddon.fit();

        terminal.onData((data) => {
          console.log("DATA", data);
          command += data;
          terminal.write(data);
        });

        terminal.attachCustomKeyEventHandler((e) => {
          // backspace key
          if (e.keyCode === 8 && command.length > 1) {
            command = command.slice(0, -1);
            terminal.write("\b \b");
            return false;
          }
          // enter key
          if (e.keyCode === 13) {
            console.log("COMMAND", command);
            command = "";
            terminal.write("\r");
            return false;
          }
          return true;
        });
        loaded.current = true;
      }
    })();

    return () => {
      // cleanup
      if (container) {
        // container.remove();
      }
    };
  }, []);
  return <div id="terminal" className="h-[30%] w-full p-2"></div>;
};