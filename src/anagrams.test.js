import { expect } from 'chai'
import { isAnagram } from './anagrams'

describe('isAnagram - basic functionality',()=>{
    //"listen" "silent"
    //"elbow" "below"
    it('returns true when two known anagrams are pased in', ()=>{
        const expected = true
        const actual = isAnagram("listen", "silent")
        expect(actual).to.equal(expected)
        
    })
    //"elbow" "belows" Not anagram
    it("returns false when either of the strings has extra letters", ()=>{
        const expected = false
        const actual = isAnagram("elbow", "belows")
        expect(actual).to.equal(expected)
        
        const actual2 = isAnagram("belows", "elbow")
        expect(actual2).to.equal(expected)
    })
    //"listens" "silent" not anagrams
    it("returns false when the strings have the same letters in different quantities",()=>{
        const expected = false
        const actual = isAnagram("listens", "silent")
        expect(actual).to.equal(expected)

    })
})