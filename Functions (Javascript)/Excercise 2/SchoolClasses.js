function classes(classes,sessionsInMonth,months,breakMonths,vication){
    
    result = (classes * sessionsInMonth * months) - (breakMonths * (sessionsInMonth - vacation));
    return result;
}