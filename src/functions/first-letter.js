export default function(str) {
    let split = str.split('');

    split[0] = split[0].toUpperCase();
    let final = split.join('');
    return final
}