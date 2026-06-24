package CalculatorExample;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class AAATest {
    private Calculator calculator;

    @BeforeEach
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup executed");
    }

    @AfterEach
    public void tearDown() {
        calculator = null;
        System.out.println("Teardown executed");
    }

    @Test
    public void testAdd() {
        // Arrange
        int a = 2;
        int b = 3;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(5, result);
    }
}