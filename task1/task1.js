/**
 *
 * Да се направи функција која за даден број на чекори `n` и низа од вредности, ќе ги поместува елементите кои се наоѓаат во неа следејќи ги следните правила:
 *
 * - Доколку `n` е ПОЗИТИВЕН број, тогаш секој од елементите во низата треба да ја промени својата позиција кон десно, за онолку места колку што изнесува `n`.
 *
 * - Доколку `n` е НЕГАТИВЕН број, тогаш секој од елементите во низата треба да ја промени својата позиција кон лево, за онолку места колку што изнесува `n`.
 *
 * Пример:
 *  - n = 2, низата ['1', '2', '3'] треба да се претвори во ['2', '3', '1']
 *  - n = -3, низата ['1', '2', '3', '4', '5'] треба да се претвори во ['4', '5', '1', '2', '3']
 */

const move = (arr, n) => {
    if (n > 0) {
        while (n != 0) {
            arr.unshift(arr.pop());
            n--;
        }
        return arr;
    } else if (n < 0) {
        while (n != 0) {
            arr.push(arr.shift());
            n++;
        }
        return arr;
    } else {
        return arr;
    }
};

let arr = ["1", "2", "3"];
let arr2 = ["1", "2", "3", "4", "5"];
console.log(move(arr, 1));
console.log(move(arr2, -3));
