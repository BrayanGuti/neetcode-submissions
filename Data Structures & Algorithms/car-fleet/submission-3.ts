class Solution {
    carFleet(target: number, position: number[], speed: number[]): number {
        const time = position.map((pos, i) => 
            [(target - pos) / speed[i], pos]
        )

        time.sort((a, b) =>  b[1] - a[1])

        let counter = time.length
        let lowestTime = time[0][0]

        for(let i = 1; i < time.length; i++) {
            if(lowestTime >= time[i][0]) {
                counter--
                continue
            }
            
            lowestTime = time[i][0]
        }

        return counter
    }
}