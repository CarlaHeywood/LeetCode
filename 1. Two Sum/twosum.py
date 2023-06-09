class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        arr = []
        for index, num in enumerate(nums):
            for j in range(index+1, len(nums)):
                remainder = target - nums[index]
                if nums[j] == remainder:
                    arr = [index,j]
                    return arr
