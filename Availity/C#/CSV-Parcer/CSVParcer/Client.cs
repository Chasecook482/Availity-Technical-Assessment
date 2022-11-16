namespace CSVParcer;
public class Client
{
    private string userId;
    private string name;
    private int version;
    private string insuranceCompany;

    public Client (string userId, string name, int version, string insuranceCompany)
    {
        this.userId = userId;
        this.name = name;
        this.version = version;
        this.insuranceCompany = insuranceCompany;
    }

    public string UserID { get {return this.userId;} private set{} }
    public string Name { get {return this.name;} private set{} }
    public int Version { get {return this.version;} private set{} }
    public string InsuranceCompany { get {return this.insuranceCompany;} private set{} }

    public override bool Equals(object? obj)
    {
        return obj is Client client &&
               insuranceCompany == client.insuranceCompany;
    }

    public override int GetHashCode()
    {
        throw new NotImplementedException();
    }
}
