//alert("questions.js loaded");

const questions = [

{
    question: "What is the output?\n\nint x = 5;\nprintf(\"%d %d %d\", x, x++, ++x);",
    options: [
        "5 5 7",
        "5 6 7",
        "Compiler Error",
        "Undefined Behavior"
    ]
},

{
    question: "Which sorting algorithm has the best average-case time complexity among the following?",
    options: [
        "Bubble Sort",
        "Insertion Sort",
        "Merge Sort",
        "Selection Sort"
    ]
},

{
    question: `What is the output?

void fun(int **p)
{
    static int y = 20;
    *p = &y;
}

int main()
{
    int x = 10;
    int *ptr = &x;

    fun(&ptr);

    printf("%d", *ptr);
}`,
    options: [
        "10",
        "20",
        "Garbage Value",
        "Compiler Error"
    ]
},

{
    question: "Which statement about 'volatile' in Embedded C is TRUE?",
    options: [
        "It stores variables in ROM.",
        "It prevents compiler optimization on the variable.",
        "It makes a variable constant.",
        "It allocates memory dynamically."
    ]
},

{
    question: `What is the output?

void fun(int **p)
{
    **p = **p + 10;
}

int main()
{
    int x = 5;
    int *ptr = &x;
    fun(&ptr);
    printf("%d", x);
}`,
    options: [
        "5",
        "10",
        "15",
        "Compiler Error"
    ]
},

{
    question: `What is the output?

int fun(int x)
{
    if(x == 0)
        return 0;
    return x + fun(x - 1);
}

int main()
{
    printf("%d", fun(4));
}`,
    options: [
        "10",
        "9",
        "16",
        "Compiler Error"
    ]
},

{
    question: `What is the output?

void fun(int *x)
{
    *x = *x + 10;
}

int main()
{
    int a = 20;
    fun(&a);
    printf("%d", a);
}`,
    options: [
        "20",
        "30",
        "10",
        "Garbage Value"
    ]
},

{
    question: `What is the output?

int fun(int n)
{
    if(n <= 1)
        return 1;
    return fun(n-1) + fun(n-2);
}

int main()
{
    printf("%d", fun(5));
}`,
    options: [
        "5",
        "8",
        "13",
        "15"
    ]
},

{
    question: `What is the output?

int fun(int x)
{
    static int y = 0;
    y += x;
    return y;
}

int main()
{
    printf("%d ", fun(2));
    printf("%d ", fun(3));
    printf("%d", fun(4));
}`,
    options: [
        "2 3 4",
        "2 5 9",
        "2 5 7",
        "9 5 2"
    ]
},

{
    question: `What is the output?

void swap(int a, int b)
{
    int t = a;
    a = b;
    b = t;
}

int main()
{
    int x = 5, y = 10;
    swap(x, y);
    printf("%d %d", x, y);
}`,
    options: [
        "10 5",
        "5 10",
        "Compiler Error",
        "Garbage Value"
    ]
},
{
    question: `What is the output?

x = [[1,2],[3,4]]
y = x.copy()
y[0][0] = 100
print(x[0][0])`,
    options: [
        "1",
        "100",
        "Error",
        "None"
    ]
},

{
        question: `What is the output?

int fun(int n)
{
    static int x = 0;

    if (n > 0)
    {
        x++;
        return fun(n - 1) + x;
    }

    return 0;
}

int main()
{
    printf("%d", fun(3));

    return 0;
}`,

        options: [
            "3",
            "6",
            "9",
            "10"
        ]
    },

{
    question: `What is the output?

a = [10,20,30,40]
print(a[-3:-1])`,
    options: [
        "[20, 30]",
        "[20, 30, 40]",
        "[10, 20]",
        "[30, 40]"
    ]
},
{
        question: `What is the output?

#include <stdio.h>

int main()
{
    int x = 10;

    {
        int x = 20;

        {
            int x = 30;
            printf("%d ", x);
        }

        printf("%d ", x);
    }

    printf("%d", x);

    return 0;
}`,

        options: [
            "10 20 30",
            "30 20 10",
            "30 10 20",
            "20 30 10"
        ]
    },


{
    question: `What is the output?

def fun(n):
    if n == 0:
        return 0
    return n + fun(n-1)

print(fun(5))`,
    options: [
        "10",
        "15",
        "20",
        "25"
    ]
},

{
    question: `What is the output of the following C program?

#include <stdio.h>

int fun(int n)
{
    static int x = 0;

    if (n > 0)
    {
        x++;
        return fun(n - 1) + x;
    }

    return 0;
}

int main()
{
    printf("%d", fun(3));

    return 0;
}`,

    options: [
        "3",
        "6",
        "9",
        "10"
    ]
},

{
    question: `What is the output?

int main()
{
    int x = 10;

    int *p = &x;
    int **q = &p;
    int ***r = &q;

    ***r = 50;

    printf("%d %d %d %d", x, *p, **q, ***r);

    return 0;
}`,

    options: [
        "10 10 10 10",
        "50 50 50 50",
        "50 10 50 10",
        "10 50 10 50"
    ]
},
    {
        question: `What is the output?

#include <stdio.h>

int main()
{
    char str[] = "HELLO";
    char *p = str;

    printf("%c ", *p++);
    printf("%c ", *p++);
    printf("%c", *p);

    return 0;
}`,

        options: [
            "H E L",
            "H L E",
            "E H L",
            "H E O"
        ]
    },


{
    question: "Which command is used to change file permissions in Linux?",
    options: [
        "chmod",
        "chown",
        "grep",
        "touch"
    ]
},

{
    question: `What is the output?

#include <stdio.h>
#include <stdlib.h>

int main()
{
    int *p = malloc(3 * sizeof(int));

    p[0] = 10;
    p[1] = 20;
    p[2] = 30;

    p = realloc(p, 5 * sizeof(int));

    p[3] = 40;
    p[4] = 50;

    printf("%d %d %d",
           *(p + 1),
           *(p + 3),
           *(p + 4));

    free(p);

    return 0;
}`,

    options: [
        "20 40 50",
        "10 30 40",
        "20 30 50",
        "Undefined Behavior"
    ]
},

{
    question: `What is the output?

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
    vector<int> v = {4, 1, 3, 1, 5, 3};

    sort(v.begin(), v.end());
    v.erase(unique(v.begin(), v.end()), v.end());

    int x = 0;
    for (auto it = v.begin(); it != v.end(); ++it)
        x += (*it * (it - v.begin() + 1));

    rotate(v.begin(), v.begin() + 1, v.end());

    cout << x << " " << v[1] << " " << v.back();

    return 0;
}`,
    options: [
        "38 3 1",
        "39 3 1",
        "38 4 1",
        "39 4 3"
    ]
},

{
    question: `What is the output?

#include <iostream>
using namespace std;

class Base
{
public:
    virtual void show()
    {
        cout << "Base";
    }
};

class Derived : public Base
{
public:
    void show()
    {
        cout << "Derived";
    }
};

int main()
{
    Base *ptr = new Derived();
    ptr->show();
}`,
    options: [
        "Base",
        "Derived",
        "Compiler Error",
        "Runtime Error"
    ]
},

{
    question: "What is the output of the following C++ code?\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int a[] = {4, 7, 2, 9, 5, 1};\n    int n = 6;\n    int result = 0;\n\n    for (int i = 0; i < n; i++) {\n        int count = 0;\n\n        for (int j = 0; j < n; j++) {\n            if (a[j] < a[i])\n                count++;\n        }\n\n        if (count % 2 == 0)\n            result += a[i];\n        else\n            result -= a[i];\n    }\n\n    cout << result;\n    return 0;\n}",
    options: [
        "4",
        "6",
        "8",
        "10"
    ]
},

{
    question: `What is the output?

#include <iostream>
using namespace std;

int main()
{
    int x = 10;
    int &ref = x;
    ref = 20;

    cout << x;
}`,
    options: [
        "10",
        "20",
        "0",
        "Compiler Error"
    ]
},

{
    question: `What is the output?

#include <iostream>
using namespace std;

class Test
{
public:
    Test()
    {
        cout << "Constructor ";
    }

    ~Test()
    {
        cout << "Destructor";
    }
};

int main()
{
    Test t;
    cout << "Main ";
}`,
    options: [
        "Main Constructor Destructor",
        "Constructor Main Destructor",
        "Constructor Destructor Main",
        "Compiler Error"
    ]
},

{
    question: `What is the most appropriate declaration for a variable modified inside an ISR and read inside the main loop?

volatile unsigned int flag = 0;

void ISR(void)
{
    flag = 1;
}

int main(void)
{
    while (1)
    {
        if (flag)
        {
            flag = 0;
        }
    }
}`,

    options: [
        "static unsigned int flag",
        "const unsigned int flag",
        "volatile unsigned int flag",
        "register unsigned int flag"
    ]
},

{
    question: `A 32-bit hardware register initially contains 0xA5A5A5A5.

The following code is executed:

unsigned int reg = 0xA5A5A5A5;

reg &= ~(0x7 << 8);
reg |=  (0x5 << 8);

What is the final value of reg?`,

    options: [
        "0xA5A505A5",
        "0xA5A555A5",
        "0xA5A50505",
        "0xA5A5A5A5"
    ]
},

{
    question: "What is the output of the following C code?\n\nint f(int *p, int n) {\n    if(n <= 0) return 0;\n    return *p + f(p + 1, n - 1);\n}\n\nint main() {\n    int a[] = {1, 2, 3, 4};\n    int *p = a + 1;\n    printf(\"%d %d\", f(p, 3), *(p + 2));\n    return 0;\n}",
    options: [
        "6 3",
        "9 3",
        "9 4",
        "10 3"
    ]
},
{
    question: "What is the output of the following C code?\n\nchar s[] = \"EMBEDDED\";\nchar *p = s;\nchar *q = s + 7;\n\nwhile (p < q) {\n    char t = *p;\n    *p++ = *q;\n    *q-- = t;\n}\n\np = s + 1;\nq = s + 6;\n\nwhile (p < q) {\n    *p++ = *q--;\n}\n\nprintf(\"%s\", s);",
    options: [
        "DEDDEBME",
        "DEDDEBDE",
        "DEDDEBEM",
        "DEDBEDME"
    ]
},

{
    question: "Which algorithm is commonly used to find the shortest path in a graph with non-negative edge weights?",
    options: [
        "DFS",
        "BFS",
        "Dijkstra's Algorithm",
        "Prim's Algorithm"
    ]
}

];