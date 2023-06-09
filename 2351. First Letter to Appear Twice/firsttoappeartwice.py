class Solution(object):
    def repeatedCharacter(self, s):
        """
        :type s: str
        :rtype: str
        """
        indexes = []

        for i in range(len(s)):
            if s[i] in indexes:
                return s[i] 
            else:
                indexes.append(s[i])

        print(indexes)