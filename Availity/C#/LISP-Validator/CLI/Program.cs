using ParenthesesDetection;

class Program
{
    static void Main(string[] args)
    {
        int row = 0;

        do
        {
            if (row == 0 || row >= 25)
                ResetConsole();

            string? input = Console.ReadLine();
            if (string.IsNullOrEmpty(input)) break;
            parenthesesPairDetection result = new parenthesesPairDetection(input);
            Console.WriteLine($"Results: {result.pairDetection()}\n");
            row += 4;
        } while (true);
        return;

        // Declare a ResetConsole local method
        void ResetConsole()
        {
            if (row > 0)
            {
                Console.WriteLine("Press any key to continue...");
                Console.ReadKey();
            }
            Console.Clear();
            Console.WriteLine($"{Environment.NewLine}Press <Enter> only to exit; otherwise, enter a string of LISP code and press <Enter> to test if all the parentheses are closed and are properly nested:{Environment.NewLine}");
            row = 3;
        }
    }
}