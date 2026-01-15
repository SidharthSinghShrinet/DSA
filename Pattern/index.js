// Pattern 1
/*
function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= 1; j--) {
            str += "* ";
        }
        str += "\n";
    }
    console.log(str);
};


pattern(5);
*/

// Pattern 2
/*
function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i + 1; j++) {
            str += j + " ";
        }
        str += "\n";
    }
    console.log(str);
};

pattern(5);
*/

// Pattern 3
/*
function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            str += j + " ";
        }
        str += "\n";
    }
    console.log(str);
};


pattern(5);
*/

// Pattern 4
/*
function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n - i + 1; j >= 1; j--) {
            str += j + " ";
        }
        str += "\n";
    }
    console.log(str);
}

pattern(5);
*/

// Pattern 5
/*
function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            str += j + " ";
        }
        str += "\n";
    }
    console.log(str);
}

pattern(5);
*/

// Pattern 6
/*
function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            str += n - i + 1 + " ";
        }
        str += "\n";
    }
    console.log(str);
};

pattern(5);
*/

// Pattern 7
/*
function pattern(n) {
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = n; j >= i; j--) {
            str += i + " ";
        }
        str += "\n";
    }
    console.log(str);
};

pattern(5);
*/

// Pattern 8
// function pattern(n) {
//     let str = "";
//     let count = n;
//     for (let i = 1; i <= n; i++) {
//         for (let j = n; j >= i; j--) {
//             if (count % 2 === 0) {
//                 str += "* ";
//             } else {
//                 str += j + " ";
//             }
//             count++;
//         }
//         str += "\n";
//     }
//     console.log(str);
// }

// pattern(5);

// Pattern 9
/*
function pattern(n) {
    let space = 0;
    let star = n;
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= space; j++) {
            str += "  ";
        }
        for (let j = 1; j <= star; j++) {
            str += "* ";
        }
        str += "\n";
        space++;
        star--;
    }
    console.log(str);
};

pattern(5);
*/

// Pattern 10
/*
function pattern(n) {
    let str = "";
    let space = 0;
    let star = n;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= space; j++) {
            str += "  ";
        }
        for (let j = 1; j <= star; j++) {
            str += i + " ";
        }
        str += "\n";
        space++;
        star--;
    }
    console.log(str);
};

pattern(5);
*/

// Pattern 11
/*
function pattern(n) {
    let str = "";
    let space = 0;
    let star = n;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= space; j++) {
            str += "  ";
        };
        for (let j = 1; j <= star; j++) {
            str += j + " ";
        }
        str += "\n";
        space++;
        star--;
    }
    console.log(str);
};

pattern(5);
*/

// Pattern 12
/*
function pattern(n) {
    let str = "";
    let space = 0;
    let star = n;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= space; j++) {
            str += "  ";
        }
        for (let j = i; j <= n; j++) {
            str += j + " ";
        }
        str += "\n";
        space++;
    }
    console.log(str);
};

pattern(5);
*/

// Pattern 13
/*
function pattern(n) {
    let str = "";
    let space = 0;
    let star = n;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= space; j++) {
            str += "  ";
        };
        for (let j = n; j >= i; j--) {
            str += n - i + 1 + " ";
        }
        str += "\n";
        space++;
    }
    console.log(str);
};

pattern(5);
*/

// Pattern 14
/*
function pattern(n) {
    let str = "";
    let space = 0;
    let star = n;
    for (let i = 1; i <= n; i++) {
        for (j = 1; j <= space; j++) {
            str += "  ";
        };
        for (j = n; j >= i; j--) {
            str += j + " ";
        }
        str += "\n";
        space++;
    }
    console.log(str);
}

pattern(5);
*/

// Pattern 15
/*
function pattern(n) {
    let str = "";
    let space = 0;
    let star = n;
    for (let i = 1; i <= n; i++) {
        for (j = 1; j <= space; j++) {
            str += "  ";
        };
        for (j = n - i + 1; j >= 1; j--) {
            str += j + " ";
        }
        str += "\n";
        space++;
    }
    console.log(str);
};

pattern(5);
*/

// Pattern 16
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let space = n - 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      str += "* ";
    }
    str += "\n";
    space--;
    star += 2;
  }
  console.log(str);
}

pattern(5);
*/

// Pattern 17
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let space = n - 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      if (Math.ceil(star / 2) >= j) {
        str += j + " ";
      } else {
        str += star - j + 1 + " ";
      }
    }
    str += "\n";
    space--;
    star += 2;
  }
  console.log(str);
}

pattern(5);
*/

// Pattern 18
/*
function pattern(n) {
  let star = 1;
  let space = Math.floor(n / 2);
  let mid = Math.floor(n / 2) + 1;
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      str += "* ";
    }
    if (mid > i) {
      space--;
      star += 2;
    } else {
      space++;
      star -= 2;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

//! Homework (14/01/2026)

// Pattern 1
/*
function pattern(n) {
  let space = n - 1;
  let star = 1;
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      str += i + " ";
    }
    str += "\n";
    space--;
    star += 2;
  }
  console.log(str);
}

pattern(5);
*/

// Pattern 2
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let space = n - 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      str += j + " ";
    }
    str += "\n";
    space--;
    star += 2;
  }
  console.log(str);
}

pattern(5);
*/

// Pattern 3
function pattern(n) {
  let space = n - 1;
  let star = 1;
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      str += star - j + 1 + " ";
    }
    str += "\n";
    space--;
    star += 2;
  }
  console.log(str);
}

pattern(5);

// Pattern 4
/*
function pattern(n) {
  let str = "";
  let space = Math.floor(n / 2);
  let star = 1;
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      str += i + " ";
    }
    if (mid > i) {
      space--;
      star += 2;
    } else {
      space++;
      star -= 2;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 5
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let space = Math.floor(n / 2);
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      str += j + " ";
    }
    if (mid > i) {
      space--;
      star += 2;
    } else {
      space++;
      star -= 2;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 6
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let space = Math.floor(n / 2);
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = star; j >= 1; j--) {
      str += j + " ";
    }
    if (mid > i) {
      space--;
      star += 2;
    } else {
      space++;
      star -= 2;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 7
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let space = Math.floor(n / 2);
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      if (Math.ceil(star / 2) >= j) {
        str += j + " ";
      } else {
        str += star - j + 1 + " ";
      }
    }
    if (mid > i) {
      space--;
      star += 2;
    } else {
      space++;
      star -= 2;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 8
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= star; j++) {
      str += "* ";
    }
    if (mid > i) {
      star++;
    } else {
      star--;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 9
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= star; j++) {
      str += i + " ";
    }
    if (mid > i) {
      star++;
    } else {
      star--;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 10
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= star; j++) {
      str += j + " ";
    }
    if (mid > i) {
      star++;
    } else {
      star--;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 11
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= star; j++) {
      str += star - j + 1 + " ";
    }
    if (mid > i) {
      star++;
    } else {
      star--;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 12
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      for (let j = 1; j <= star; j++) {
        str += j + " ";
      }
    } else {
      for (let j = 1; j <= star; j++) {
        str += star - j + 1 + " ";
      }
    }
    if (mid > i) {
      star++;
    } else {
      star--;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 13
/*
function pattern(n) {
  let str = "";
  let space = Math.floor(n / 2);
  let star = 1;
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      str += "* ";
    }
    if (mid > i) {
      space--;
      star++;
    } else {
      space++;
      star--;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 14
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let space = Math.floor(n / 2);
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      str += i + " ";
    }
    if (mid > i) {
      space--;
      star++;
    } else {
      space++;
      star--;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 15
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let space = Math.floor(n / 2);
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      str += j + " ";
    }
    if (mid > i) {
      space--;
      star++;
    } else {
      space++;
      star--;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 16
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let space = Math.floor(n / 2);
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      str += star - j + 1 + " ";
    }
    if (mid > i) {
      space--;
      star++;
    } else {
      space++;
      star--;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 17
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let space = Math.floor(n / 2);
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      for (let j = 1; j <= space; j++) {
        str += "  ";
      }
      for (let j = 1; j <= star; j++) {
        str += j + " ";
      }
    } else {
      for (let j = 1; j <= space; j++) {
        str += "  ";
      }
      for (let j = 1; j <= star; j++) {
        str += star - j + 1 + " ";
      }
    }
    if (mid > i) {
      space--;
      star++;
    } else {
      space++;
      star--;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/

// Pattern 18
/*
function pattern(n) {
  let str = "";
  let star = 1;
  let space = Math.floor(n / 2);
  let mid = Math.floor(n / 2) + 1;
  for (let i = 1; i <= n; i++) {
    console.log(star);
    for (let j = 1; j <= space; j++) {
      str += "  ";
    }
    for (let j = 1; j <= star; j++) {
      if (j === 1 || j === star) {
        str += "* ";
      } else {
        str += "  ";
      }
    }
    if (mid > i) {
      space--;
      star += 2;
    } else {
      space++;
      star -= 2;
    }
    str += "\n";
  }
  console.log(str);
}

pattern(7);
*/
