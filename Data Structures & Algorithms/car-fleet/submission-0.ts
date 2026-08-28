class Solution {
    carFleet(target: number, position: number[], speed: number[]): number {
        const cars = position
            .map((p, i) => [p, speed[i]] as [number, number])
            .sort((a, b) => b[0] - a[0]); // más cercano al target primero

        let fleets = 0;
        let maxTime = 0;

        for (const [p, s] of cars) {
            const time = (target - p) / s;
            if (time > maxTime) {
                fleets++;
                maxTime = time;
            }
        }

        return fleets;
    }
}