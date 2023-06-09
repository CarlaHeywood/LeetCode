class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        symbol = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
        temp = [0]

        if "IV" in str(s):
          s = s.replace("IV","VIIII",1)
          print(s, "IV")
        if "IX" in str(s):
          s = s.replace("IX","VIIII",1)
          print(s, "IX")
        if "XL" in str(s):
          s = s.replace("XL","XXXX",1)
          print(s, "XL")
        if "XC" in str(s):
          s = s.replace("XC","LXXXX",1)
          print(s, "XC")
        if "CD" in s:
          s = s.replace("CD","CCCC",1)
          print(s, "CD")
        if "CM" in s:
          s = s.replace("CM","DCCCC",1)
          print(s, "CM")

        for i in range(len(s)):
            print(i)
            if s[i] == 'I':
                temp.insert(i, 1)
                print(s[i], temp)

            elif s[i] == 'V':
                temp.insert(i, 5)
                print(s[i], temp)

            elif s[i] == 'X':
                temp.insert(i,10)
                print(s[i], temp)

            elif s[i] == 'L':
                temp.insert(i,50)
                print(s[i], temp)

            elif s[i] == 'C':
                temp.insert(i,100)
                print(s[i], temp)

            elif s[i] == 'D':
                temp.insert(i,500)
                print(s[i], temp)

            elif s[i] == 'M':
                temp.insert(i,1000)
                print(s[i], temp)
            else:
                break
                
        return sum(temp)