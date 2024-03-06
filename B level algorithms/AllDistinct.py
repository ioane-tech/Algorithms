array = [1,2,2,3,4,5,7,5]
newlist=[]
for i in array:
    if i not in newlist:
        newlist.append(i)
print(newlist)
