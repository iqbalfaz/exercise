// class Player {
//     name;
//     ball;
//     constructor(name) {
//       this.name = name;
//       this.ball = "";
//     }
//   }
//   class Billiard {
//     player1;
//     player2;
//     constructor(player1, player2) {
//       this.player1 = player1;
//       this.player2 = player2;
//     }
//     nineBall() {
//       let currentBall = 1;
//       let allBall = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//       let currenPlayer = new Player();
//       function insertBall(player) {
//         console.log(`Current Ball ${currentBall}`);
//         let random = Math.floor(Math.random() * 2);
//         // harusnya ambil random dari element2 array bukan dari panjang array
//         const randomBall = Math.floor(Math.random() * allBall.length);
//         let myBall = allBall[randomBall];
//         if (random === 0) {
//           if (myBall === currentBall) {
//             let index = allBall.indexOf(myBall);
//             allBall.splice(index, 1);
//             currentBall += 1;
//             console.log(
//               `Player ${player.name} berhasil memasukkan bola ${myBall} dan berurutan`
//             );
//           } else {
//             console.log(
//               `Player ${player.name} berhasil memasukkan bola ${myBall} tetapi tidak berurutan`
//             );
//           }
//         } else if (random === 1) {
//           console.log(`Player ${player.name} gagal memasukkan bola ${myBall}`);
//         }
//       }
//       while (currentBall <= 9) {
//         currenPlayer = this.player1;
//         insertBall(currenPlayer);
//         if (currentBall > 9) {
//           break;
//         }
//         currenPlayer = this.player2;
//         insertBall(currenPlayer);
//         if (currentBall > 9) {
//           break;
//         }
//       }
//       console.log(`The Winner is Player ${currenPlayer.name}`);
//     }


// Create a function to convert Excel sheet column title to its corresponding column number.

function titleToNumber(str)
{

    let result = 0;
    for (let i = 0; i < str.length; i++)
    {
        result *= 26;
        result += str[i].charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    return result;
}


console.log(titleToNumber("AB"));

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

function singleNumber(nums) {
    var result = nums[0];
    for(var i = 1; i < nums.length; i++) {
        result = result^nums[i];
    }
    return result;
};

console.log(singleNumber([4,1,2,1,2]));



// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

function isAnagram(s, t) {
    let S = s.split('');
    let T = t.split('');
    if(S.length !== T.length) {
        return false;
    }
    let smap = new Map();
    let tmap = new Map();
    for (let x of S) {
        if (smap.has(x)) {
        smap.set(x, smap.get(x) + 1);
        }
        else {
            smap.set(x , 1);
        }
    }
    for (let x of T) {
        if (tmap.has(x)) {
        tmap.set(x, tmap.get(x)+1);
        }
        else{
            tmap.set(x,1);
        }
    }
    console.log(tmap,'Tmap');
    console.log(smap,"Smap");
    for (let [k,v] of tmap){
        if(v !== smap.get(k)){
            return false;
        }
    }
    return true;
}

console.log(isAnagram("anagram", "nagaram"));



// You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1
// or 2 steps. In how many distinct ways can you climb to the top?


function climbStairs(n) {
    let arr=[];
    arr[1]= 1;
    arr[2]= 2;
    for (let i = 3; i <= n; i++) {
        arr[i]= arr[i-1] + arr[i-2];
    }
    return arr[n];
};

console.log(climbStairs(6))