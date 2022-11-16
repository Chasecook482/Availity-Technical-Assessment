namespace ParenthesesDetection
{
    public class parenthesesPairDetection
	{
		private string testingString;

		public parenthesesPairDetection(string input)
		{
			this.testingString = input;
		}

		public bool pairDetection()
		{
            int count = 0;

            for (int i = 0; i < this.testingString.Length; i++) 
            {
                switch (this.testingString[i]) {
                case '(':
                    count++;
                    break;
                case ')':
                    count--;
                    break;
                default:
                    if (count < 0) return false;
                    break;
                }
            }

            return (count == 0);
		}
	}
}