class Solution:
    def isGood(self, nums: List[int]) -> bool:
        n = max(nums)
        print(len(nums) , nums)
        if len(nums) == n+1:
            if 1 in nums:
                if nums.count(n) == 2:  
                    while n!=1:
                        n-=1
                        print(n)
                        if n in nums:
                            continue
                        else: return False
                    return True
                else: return False
            else: return False
        else: return False