const green = "\x1b[1;32m";
const cyan = "\x1b[1;36m";
const yellow = "\x1b[1;33m";
const normal = "\x1b[0m";
export const introMessage = [
  green + "+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+" + normal,
  green + "|                                                                             |" + normal,
  green + "|   " + cyan + "thomson.cx" + normal + green + " — CTF Lab                                                    |" + normal,
  green + "|                                                                             |" + normal,
  green + "|   Browser-based Linux VM. Your challenges are ready.                        |" + normal,
  green + "|                                                                             |" + normal,
  green + "|   " + yellow + "Available challenges:" + normal + green + "                                                 |" + normal,
  green + "|     ~/challenges/init-flag/    [Easy   - 25pts]                             |" + normal,
  green + "|     ~/challenges/log-trace/    [Medium - 75pts]                             |" + normal,
  green + "|     ~/challenges/hash-hunt/    [Medium - 100pts]                            |" + normal,
  green + "|                                                                             |" + normal,
  green + "|   Run: " + cyan + "cat ~/challenges/<name>/README.txt" + normal + green + " to get started.           |" + normal,
  green + "|   Flags are in the format: " + yellow + "flag{...}" + normal + green + "                                   |" + normal,
  green + "|                                                                             |" + normal,
  green + "+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+" + normal,
  "",
];
export const errorMessage = [
  cyan + "VM could not start" + normal,
  "",
  "Check the DevTools console for more information",
  "",
  "Expected to work with recent versions of Chrome, Edge, Firefox and Safari",
  "",
  "Try from a desktop browser if on mobile.",
  "",
  "Internal error message:",
  "",
];
export const unexpectedErrorMessage = [
  cyan + "The VM encountered an unexpected error" + normal,
  "",
  "Check the DevTools console for further information",
  "",
  "Internal error message:",
  "",
];
