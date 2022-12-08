function splitAB (a, b) {
    return [a.split('.'), b.split('.')]
}
function doOperand([a, b], operand) {
    let res = []
    for (let i = 0; i < a.length; i++) {
        res.push(parseInt(eval(`${a[i]} ${operand} ${b[i]}`)))
    }
    return res.join('.')
}
function reverseBit(x) {
    var mask = (Math.pow(2,8)-1); // calculate mask
    return (~x & mask).toString();
}

function AND(a, b) {
    return doOperand(splitAB(a, b), '&')
}

function OR(a, b) {
    return doOperand(splitAB(a, b.split('.').map(x => reverseBit(x)).join('.')), '|')
}

function main(ip, netmask) {
    console.table([
        {
            ip,
            NID: AND(ip, netmask),
            Broadcast: OR(ip, netmask)
        }
    ])
}

// console.log(getIP("192.191.12.92", "255.255.255.192"))
// main('192.168.1.128', '255.255.255.128')
main("192.191.8.0", "255.255.252.0")
main("192.191.4.0", "255.255.254.0")
main("192.191.6.0", "255.255.254.0")
main("192.191.2.0", "255.255.255.0")
main("192.191.3.0", "255.255.255.0")
main("192.191.0.128", "255.255.255.128")
main("192.191.1.128", "255.255.255.128")
main("192.191.1.0", "255.255.255.128")
main("192.191.0.64", "255.255.255.192")
main("192.191.0.0", "255.255.255.252")
main("192.191.0.4", "255.255.255.252")
main("192.191.0.8", "255.255.255.252")
main("192.191.0.12", "255.255.255.252")
main("192.191.0.16", "255.255.255.252")
main("192.191.0.20", "255.255.255.252")
main("192.191.0.24", "255.255.255.252")
main("192.191.0.28", "255.255.255.252")
main("192.191.0.32", "255.255.255.252")