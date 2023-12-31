/**
 *
 * @returns {string} Current page position, for example "/profile"
 */
function getCurrentPage() {
  const urlWithoutProtocol = String(window.location.href).replace(
    String(window.location.href).includes("http://") ? "http://" : "https://",
    ""
  );
  var arrayParts = urlWithoutProtocol.split("/");
  arrayParts.shift();
  const finalURL = "/" + arrayParts.join("/");
  return finalURL;
}

/**
 *
 * Runs a function on page load
 * @param {string} page Page, use * to run on every page
 * @param {function} func function to run on page load
 */
function onSpecificPageLoad(page, func) {
  if (typeof page != "string")
    throw "You have to provide the page in the onLoad() function!";
  if (page.includes("*") && page != "*") {
    if (getCurrentPage().includes(page.replace("*", "")) == false) {
      return;
    }
  } else {
    if (getCurrentPage() != page) {
      if (page != "*") return;
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    func();
  });
}

/**
 * Please use the "onSpecificPageLoad" function.
 * @param {function} func
 */
function onLoad(func) {
  if (document.readyState == "complete") {
    func();
  } else {
    document.addEventListener("DOMContentLoaded", () => {
      func();
    });
  }
}

function goto(url) {
  window.location.href = url;
}

function hide(elId) {
  document.getElementById(elId).classList.add("hidden");
}

function show(elId) {
  document.getElementById(elId).classList.remove("hidden");
}

function isEmpty(text) {
  if (text == "" || text == null) return true;
  let splittedText = text.split("");
  let isEmpty = true;
  splittedText.forEach((element) => {
    if (isEmpty) {
      if (element != " ") {
        isEmpty = false;
      }
    }
  });

  return isEmpty;
}

function setToStrictStringLowercase(text, noNumbers, noSpecialChars) {
  text = text.replace(new RegExp(String(" "), "g"), String(""));
  var newArray = [];

  const userName = text;
  userName.split("").forEach((letter) => {
    newArray.push(letter.toLowerCase());
  });

  var finalresult = newArray.join("");

  if (noNumbers) {
    finalresult = finalresult.replace(/\d+/g, "");
  }
  if (noSpecialChars) {
    finalresult = finalresult.replace(/[!@#$%^&*(),.?":{}|<>]/g, "");
  }

  return finalresult;
}

function getCurrentTheme(strict) {
  if (
    localStorage.getItem("theme") == null ||
    localStorage.getItem("theme") == "system"
  ) {
    if (strict) {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      if (darkThemeMq.matches) {
        return "dark";
      } else {
        return "light";
      }
    } else {
      return "system";
    }
  } else if (localStorage.getItem("theme") == "dark") {
    return "dark";
  } else if (localStorage.getItem("theme") == "light") {
    return "light";
  }
}

function mathRandomInt(a, b) {
  if (a > b) {
    // Swap a and b to ensure a is smaller.
    var c = a;
    a = b;
    b = c;
  }
  return Math.floor(Math.random() * (b - a + 1) + a);
}

function cutText(text, maxLength) {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  } else {
    return text;
  }
}

function showAlert(title, description, onDismiss) {
  document.getElementById("modal-alert-title").innerText = title;
  document.getElementById("modal-alert-content").innerText = description;
  if (onDismiss && typeof onDismiss == "function") {
    document
      .getElementById("btn_primary_confirm")
      .addEventListener("click", () => {
        onDismiss();
      });
    document
      .getElementById("modal_overlay_dismiss")
      .addEventListener("click", () => {
        onDismiss();
      });
  }

  document.getElementById("modal-alert").checked = true;
}

function formatDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString(undefined, options);
}

// Used in blocks
function sanitizeInput(input, options) {
  if (!options) options = {};
  let safeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  safeChars = safeChars.split("");
  if (options.allowNumbers) {
    let numbers = "0123456789";
    numbers = numbers.split("");
    safeChars = [...safeChars, ...numbers];
  }
  if (options.allowSpaces) {
    safeChars.push(" ");
  }
  input = input.split("");
  input = input.filter((character) => safeChars.includes(character));
  input = input.join("");
  input = input.replaceAll('"', "");
  input = input.replaceAll("'", "");
  return input;
}

function generateRandomString(length) {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default {
  onSpecificPageLoad,
  onLoad,
  getCurrentPage,
  goto,
  hide,
  show,
  isEmpty,
  setToStrictStringLowercase,
  getCurrentTheme,
  mathRandomInt,
  cutText,
  showAlert,
  formatDate,
  sanitizeInput,
  generateRandomString,
};
