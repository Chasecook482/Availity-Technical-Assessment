using CSVParcer;

class Program
{
    static void Main(string[] args)
    {
        IDictionary<string, List<Client>> insuranceCompanies = new Dictionary<string, List<Client>>();

        Console.WriteLine("Please provide path to CSV file to parse: ");
        string? input = Console.ReadLine();
        if(input is not null) insuranceCompanies = CSVTool.CSVReader(input);
        List<string> keyList = new List<string>(insuranceCompanies.Keys);
        foreach (string key in keyList)
        {
            CSVTool.CSVWriter(key, insuranceCompanies[key]);
        }
    }
}