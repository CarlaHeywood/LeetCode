class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """

        y = str(x)[::-1]
        # print(y)
        if y == str(x):
            return True