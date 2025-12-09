# DSA Journal — JS / TS / Java

I am following a book and a online free course to learn data structures and algorithms in TypeScript.

I keep short, runnable implementations of common data structures and algorithms while learning TypeScript alongside the languages I already use (JavaScript and Java). For each exercise I typically write the solution in TypeScript (the course language), then re-implement it in JavaScript and Java to compare styles and idioms.

What’s in this repo
- `dataStructures/`, `search/`, `sort/`... — folders with matching implementations in `.ts`, `.js`, and `.java`.
- Many JS files include a small self-test harness and can be run directly with Node. Java files include a `main` with simple assertions.

Quick start (examples)
- Run a JS snippet:

```zsh
node dataStructures/Stack.js
```

- Compile and run a Java snippet:

```zsh
javac dataStructures/Stack.java
java dataStructures.Stack
```

Notes on TypeScript
- TypeScript files are written to integrate with a course test suite (not included here). To run the TS code locally a matching test harness or the right dev dependencies are needed.

Design & intent
- Keep implementations small and explicit so the algorithmic idea is clear.
- Re-implementing the same algorithm in three languages helps to solidify the idea.
 
 
 
