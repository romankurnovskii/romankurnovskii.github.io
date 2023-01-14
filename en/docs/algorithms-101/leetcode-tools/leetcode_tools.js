const USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:36.0) Gecko/20100101 Firefox/36.0"

const headers = {
    "User-Agent": USER_AGENT,
    credentials: 'include',
    // 'Cookie': 'LEETCODE_SESSION=' + LEETCODE_SESSION
}


const url = 'https://leetcode.com/api/problems/all'

console.log(16, 'https://leetcode.com/api/problems/all')

try {
    fetch(url, { headers });
}
catch (error) {
    console.log(error)
}




try {

    fetch(url, {
        method: "GET",
        headers: {
            "User-Agent": USER_AGENT,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Cache': 'no-cache',
            'Cookie': 'LEETCODE_SESSION=' + LEETCODE_SESSION
        },
        credentials: 'include'
    }).then(response => {
        console.log(26, response)
    }).catch(err => {
        console.log(28, err)
    })
} catch (error) {
    console.log(43, error)
}