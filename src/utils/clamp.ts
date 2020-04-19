export const clamp = (min: number, max: number, num?: number) => {
    return Math.max(Math.min(max, num ?? 0), min)
}
