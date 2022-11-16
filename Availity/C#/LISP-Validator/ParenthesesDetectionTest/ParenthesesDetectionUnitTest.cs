using Microsoft.VisualStudio.TestTools.UnitTesting;
using ParenthesesDetection;

namespace ParenthesesDetectionTest;

[TestClass]
public class ParenthesesDetectionUnitTest
{
    [TestMethod]
    [DataRow("()")]
    [DataRow("()()()")]
    [DataRow("((()))")]
    [DataRow("((()()))")]
    public void pairDetection_ParenthesesProperlyClosed_True(string input)
    {
        parenthesesPairDetection pair = new parenthesesPairDetection(input);
        Assert.IsTrue(pair.pairDetection());
    }

    [TestMethod]
    [DataRow("(()")]
    [DataRow("()()(")]
    [DataRow("((())")]
    [DataRow("((()()())")]
    public void pairDetection_ParenthesesNotProperlyClosed_False(string input)
    {
        parenthesesPairDetection pair = new parenthesesPairDetection(input);
        Assert.IsFalse(pair.pairDetection());
    }

    [TestMethod]
    [DataRow("(defun read-lines (file) 'Return a list of lines in FILE.' (with-temp-buffer (insert-file-contents file) (split-string (buffer-string) '\n' t))) ")]
    [DataRow("(mapcar (lambda (x) (mapcar (lambda (y) (string-to-number y)) (split-string x ' '))) (read-lines 'blob.txt'))")]
    //Sample code taken from https://danielsz.github.io/blog/deft-20.html
    public void pairDetection_SampleLISPCode_True(string input)
    {
        parenthesesPairDetection pair = new parenthesesPairDetection(input);
        Assert.IsTrue(pair.pairDetection());
    }
}