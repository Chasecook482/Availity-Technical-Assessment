using Microsoft.VisualBasic.FileIO;

namespace CSVParcer;
public class CSVTool
{   
    private const string header = "User Id, First and Last Name, Version, Insurance Company";

    public static IDictionary<string, List<Client>> CSVReader(string path)
    {
        IDictionary<string, List<Client>> temp = new Dictionary<string, List<Client>>();
        try
        {
            using (TextFieldParser parser = new TextFieldParser(path))
            {
                parser.Delimiters = new string[] { "," };
                if (!parser.EndOfData) parser.ReadFields();
                while (!parser.EndOfData)
                {
                    string[] parts = parser.ReadFields();
                    if (parts == null)
                    {
                        break;
                    }
                    Client client = new Client( parts[0], parts[1], Int32.Parse(parts[2]), parts[3]);
                    if(!temp.ContainsKey(client.InsuranceCompany)) 
                    {
                        temp.Add(client.InsuranceCompany, new List<Client>());
                    }
                    temp[client.InsuranceCompany].Add(client);
                }
            }
        }
        catch (ArgumentNullException)
        {
            Console.WriteLine("path provided was not valid");
        }
        return temp;
    }

    public static void CSVWriter(string key, List<Client> clients)
    {
        string folderPath = Path.Combine(Directory.GetCurrentDirectory(), "Insurance Companies");
        string filePath = Path.Combine(folderPath, key + ".csv");
        if (!Directory.Exists(folderPath)) Directory.CreateDirectory(folderPath);
        try
        {
            var versionUpdatedClients = clients.GroupBy(a => (a.UserID))
                .SelectMany(b => b.Where(c => c.Version == b.Max(d => d.Version))).ToList();
            var orderClients = versionUpdatedClients.OrderBy(c => c.Name).ToList();

            using (StreamWriter file = new StreamWriter(@filePath, true))
            {  
                file.WriteLine(header);
                foreach(var client in orderClients)
                {
                    file.WriteLine(client.UserID + "," + client.Name + "," + client.Version + "," + client.InsuranceCompany);
                }
            }
        }
        catch (Exception)
        {
            System.Console.WriteLine("There was an error writing the file");
        }
    }

}
