public class FinancialForecast {

    public static double predictFutureValue(double cu,double growthRate,int years){
        // Base Case
        if(years==0) {
            return cu;
        }
        return predictFutureValue(cu*(1 + growthRate),growthRate,years - 1);
    }

    public static void main(String[] args) {

        double currentValue = 10000;
        double growthRate = 0.10;
        int years = 5;
        double futureValue =predictFutureValue(currentValue, growthRate, years);

        System.out.println("Current Value:" + currentValue);
        System.out.println("Value after "+years+ "years:" + futureValue);
    }
}