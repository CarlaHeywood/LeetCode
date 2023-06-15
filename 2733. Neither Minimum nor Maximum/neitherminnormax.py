class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        max = nums[0]
        min = nums[0]
        
        for i in range(len(nums)):
            if max < nums[i-1]:
                max = nums[i-1]   
            
        for i in range(len(nums)):
            if min > nums[i-1]:
                min = nums[i-1]
        print(min, max, len(nums))
        # No inbetween
        if min+1==max or max-1==min or max==min or len(nums)==2 or len(nums)==1:
            return -1
        
        i = 0
        result = min
        while result==min or result==max:
            result = nums[i]
            i=i+1
        
        return result
