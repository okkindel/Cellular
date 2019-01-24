# Cellular

A simple cellular automata engine inspired by [conways game of life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

## Runing

Just run index.html to play. There is live demo avalible on [my website](https://okkindel.github.io/cellular/). Have fun.

## Keys

| KEY         | ACTION                             |
|-------------|------------------------------------|
| d           | turn cell division on / off        |
| h           | add more food                      |
| i           | turn on / off info box             |
| n           | create random cell                 |
| r           | remove all cells                   |
| arrow down  | set bottom cells limit down        |
| arrow up    | set bottom cells limit up          |
| mouse click | click on cell to show its info box |

## Behavior

Cells will move chaotically in search of food. Each crumb increases the mass of the cell. The cell loses mass on movement. When the molecule reaches a certain mass, it divides into two identical cells, if the mass drops too much - the cell dies leaving some food behind. When the cells come together, they turn away from each other and go in opposite directions.

## Appearance

![screenshot](./ss.png)