def drinks():
    number_of_drinks=int(input())
    list_of_percentage=[]
    list_of_percentage2=[]
    for i in range(number_of_drinks):
        fraction_of_orange_juice=int(input())
        list_of_percentage.append(fraction_of_orange_juice)
        percentage= float(fraction_of_orange_juice/100.0)
        list_of_percentage2.append(percentage)
    
    sum_of_percentage=sum(list_of_percentage2)
   
    total_percentage=(sum_of_percentage/number_of_drinks)*100
    print(total_percentage)


drinks()
        











    
    



