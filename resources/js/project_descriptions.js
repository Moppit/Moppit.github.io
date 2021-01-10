var embroidery = `Practical Methods for the Embroidery Problem

The Embroidery Problem seeks to optimize thread usage while embroidering a given
pattern (which is represented by a Euclidean graph). A valid
embroidery of a pattern is described as a closed tour with 
alternating front and back edges, each with an associated weight (which,
due to the Euclidean integration, is equivalent to the distance 
between vertices). The problem is NP-Hard, as established by Arkin et al.
As such, we explore methods such as reducing to TSP and using TSP solvers, and
approximation algorithms.

The implementation can be found here: https://github.com/Moppit/EmbroideryProblem
`;

var sudoku = `Sudoku Solver

Sudoku for nxn boards is NP-Complete, and as such it is difficult to find solutions efficiently.
This project contains two methods: a DPLL-style backtracking algorithm with constraint propagation, 
and a Sudoku-SAT reduction which is then run through Python-SAT's Glucose3 SAT solver. Unsurprisingly,
the polynomial reduction + SAT solver is the much more efficient solution given the recent progress
on SAT solvers.

The implementation can be found here: https://github.com/Moppit/CSCI4114-PSET3
`;

var firewall = `Firewall Fighter

A game developed at HackCU V where players act as a firewall and block malicious traffic. The cursor is
controlled using a Leap Motion sensor, making it more interactive and fun for young children who are
just beginning to learn about cybersecurity. Created using Unity (C#).

More details can be found here: https://devpost.com/software/firewall-fighter
`;