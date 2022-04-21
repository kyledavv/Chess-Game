// import { timeStamp } from "console";

// function* createFibonacciGenerator() {
//     let a = 0
//     let b = 1
//     while (true) {
//         yield a;
//         [a, b] = [b, a + b]
//     }
// }

// let fibonacciGenerator = createFibonacciGenerator()

// fibonacciGenerator.next()
// fibonacciGenerator.next()
// fibonacciGenerator.next()
// fibonacciGenerator.next()
// fibonacciGenerator.next()
// fibonacciGenerator.next()


// function* createNumbers(): IterableIterator<number> {
//     let n = 0
//     while (1) {
//         yield n++
//     }
// }



// let numbers = {
//     *[Symbol.iterator]() {
//         for (let n = 1; n <= 10; n++) {
//             yield n
//         }
//     }
// }

// //function greet(name: string)
// type Greet = (name: string) => string

// //function log(message: string, userId?: string)
// type Log = (message: string, userId?: string) => void

// let log: Log = (message, userId = 'Not signed in') => {
//     let time = new Date().toISOString()
//     console.log(time, message, userId)
// }

// //function sumVariadicSafe(...numbers: number[]): number
// type SumVariadicSafe = (...numbers: number[]) => number

// function times(
//     f: (index: number) => void,
//     n: number
// ) {
//     for (let i = 0; i < n; i++) {
//         f(i)
//     }
// }

// times(n => console.log(n), 8)

// // overloaded function = function with multiple call signatures

// // type Reserve = {
// //     (from: Date, to: Date, destination: string): Reservation
// // }

// // let reserve: Reserve = (from, to, destination) => {
// //     //...
// // }

// type Reserve = {
//     (from: Date, to: Date, destination: string): Reservation
//     (from: Date, destination: string): Reservation
// }

// // let reserve: Reserve = (
// //     from: Date, toOrDestination: Date | string, destination?: string
// //  ) => {
// //     // ...
// // }

// let reserve: Reserve = (
//     from: Date,
//     toOrDestination: Date | string,
//     destination?: string
// ) => {
//     if (toOrDestination instanceof Date && destination !== undefined) {
//         //Book a one-way trip
//     } else if (typeof toOrDestination === 'string') {
//         //Book a round trip
//     }
// }

// Classes are your primary unit of encapsulation

// CHESS GAME -------------------------------------------------------------------------------

// represents chess game
class Game {
    // private(only the class); calls Game class makePieces static method
    private pieces: Piece[] 

    constructor(pieces: Piece[]){
        this.pieces = pieces
    }
    
    // makePieces (instances of the chess board); Every time new game generated, stores pieces as private pieces array
    public static makePieces() {
        return [
            //kings
            new King('White', 'E', 1),
            new King('Black', 'E', 8),
            //queens
            new Queen('White', 'D', 1),
            new Queen('Black','D', 8),
            //bishops
            new Bishop('White', 'C', 1),
            new Bishop('White', 'F', 1),
            new Bishop('Black', 'C', 8),
            new Bishop('Black', 'F', 8),
            //knights
            new Knight('White', 'B', 1),
            new Knight('White', 'G', 1),
            new Knight('Black', 'B', 8),
            new Knight('Black', 'G', 8),
            //rook
            new Rook('White', 'A', 1),
            new Rook('White', 'H', 1),
            new Rook('Black', 'A', 8),
            new Rook('Black', 'H', 8),
            //pawns
            new Pawn ('White', 'A', 2),
            new Pawn ('White', 'B', 2),
            new Pawn ('White', 'C', 2),
            new Pawn ('White', 'D', 2),
            new Pawn ('White', 'E', 2),
            new Pawn ('White', 'F', 2),
            new Pawn ('White', 'G', 2),
            new Pawn ('White', 'H', 2),
            new Pawn ('Black', 'A', 7),
            new Pawn ('Black', 'B', 7),
            new Pawn ('Black', 'C', 7),
            new Pawn ('Black', 'D', 7),
            new Pawn ('Black', 'E', 7),
            new Pawn ('Black', 'F', 7),
            new Pawn ('Black', 'G', 7),
            new Pawn ('Black', 'H', 7)
           
        ]
    }
}

const game = new Game(Game.makePieces())

type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

//a set of coordinates for a piece
//x axis: files (letters), y axis: ranks (numbers) 8x8
class Position {

    private file: File;
    private rank: Rank;

    constructor(file: File, rank: Rank) {
        this.file = file;
        this.rank = rank;
    }
    distanceFrom(position: Position) {
        return {
            rank: this.rank - position.rank,
            file: this.file.charCodeAt(0) - position.file.charCodeAt(0)
        };
    }
}

//...
abstract class Piece {

    private readonly color: Color;
    protected position: Position;

    constructor(color: Color, file: File, rank: Rank) {
        this.color = color;
        this.position = new Position(file, rank);

    }

    moveTo(position: Position) {
        this.position = position;
    }
    abstract canMoveTo(position: Position): boolean
}

class King extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }
}
class Queen extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 9 && distance.file < 9 || distance.rank === distance.file

    }
}
class Bishop extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank === distance.file
    }
}
class Knight extends Piece {}
class Rook extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 9
    }
}
class Pawn extends Piece {
    canMoveTo(position: Position) {
        let distance = this.position.distanceFrom(position)
        return distance.rank < 2
    }
    const blackwhite = 'Black' || 'White';

    switch (blackwhite) {
        case 'Black':
            let distance = this.position.distanceFrom(Position)
            return distance.rank -2;
            
        case 'White':
            let distance = this.position.distanceFrom(Position)
            return distance.rank 
        default:
            console.log('Invalid Color!');
            break;
    }
}




// let set = new Set
// set.add(1).add(2).add(3)
// set.has(2)
// set.has(4)

// class Set {
//     has(value: number): boolean {
//         //...
//     }
//     add(value: number): Set {
//         //...
//     }
// }

// class MutableSet extends Set {
//     delete(value: number): boolean {
//         //...
//     }
// }

// class Set {
//     has(value: number): boolean {
//         //...
//     }
//     add(value: number): this {
//         //...
//     }
// }

// class MutableSet extends Set {
//     delete(value: number): boolean {
//         //...
//     }
// }

//Type aliases
// type Food = {
//     calories: number
//     tasty: boolean
// }
// type Sushi = Food & {
//     salty: boolean
// }
// type Cake = Food & {
//     sweet: boolean
// }

// interface Foods {
//     calories: number
//     tasty: boolean
// }
// interface Sushis extends Food {
//     salty: boolean
// }
// interface Cakes extends Food {
//     sweet: boolean
// }

// interface A {
//     good(x: number): string
//     bad(x: number): string
// }

// interface User {
//     name: string
// }

// interface User {
//     age: number
// }

// let a: User = {
//     name: 'Ashley',
//     age: 30
// }

interface Animal {
    eat(food: string): void
    sleep(hours: number): void
}

class Cat implements Animal {
    eat(food: string) {
        console.info('Ate some', food, '.Mmm!')
    }
    sleep(hours: number) {
        console.info('Slept for', hours, 'hours')
    }
}

