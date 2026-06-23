CREATE TABLE customers (
    customer_id NUMBER,
    age NUMBER,
    balance NUMBER,
    isvip VARCHAR2(5)
);

CREATE TABLE loans (
    loan_id NUMBER,
    customer_id NUMBER,
    interest_rate NUMBER,
    due_date DATE
);

INSERT INTO customers VALUES (1, 65, 12000, 'FALSE');
INSERT INTO customers VALUES (2, 45, 8000, 'FALSE');
INSERT INTO customers VALUES (3, 55, 13000, 'FALSE');
INSERT INTO customers VALUES (4, 67, 10000, 'FALSE');

INSERT INTO loans VALUES (101, 1, 10, SYSDATE + 10);
INSERT INTO loans VALUES (102, 2, 12, SYSDATE + 40);
INSERT INTO loans VALUES (103, 3, 9, SYSDATE + 15);
INSERT INTO loans VALUES (104, 4, 11, SYSDATE + 30);

commit;

select * from CUSTOMERS;
select * from LOANS;

DECLARE
    CURSOR c_customers IS
        SELECT CUSTOMER_ID, AGE
        FROM CUSTOMERS;

BEGIN
    FOR rec IN c_customers LOOP
        IF rec.AGE > 60 THEN
            UPDATE LOANS
            SET INTEREST_RATE = INTEREST_RATE - (INTEREST_RATE * 0.01)
            WHERE CUSTOMER_ID = rec.CUSTOMER_ID;
        END IF;
    END LOOP;

    COMMIT;
END;
/

select * from CUSTOMERS;
select * from LOANS;

DECLARE
    CURSOR c_customers IS
        SELECT CUSTOMER_ID, BALANCE
        FROM CUSTOMERS;

BEGIN
    FOR rec IN c_customers LOOP
        IF rec.BALANCE > 10000 THEN
            UPDATE CUSTOMERS
            SET ISVIP = 'TRUE'
            WHERE CUSTOMER_ID = rec.CUSTOMER_ID;
        ELSE
            UPDATE CUSTOMERS
            SET ISVIP = 'FALSE'
            WHERE CUSTOMER_ID = rec.CUSTOMER_ID;
        END IF;
    END LOOP;

    COMMIT;
END;
/

select * from CUSTOMERS;

DECLARE
    CURSOR c_loans IS
        SELECT l.CUSTOMER_ID,
               l.DUE_DATE
        FROM LOANS l
        WHERE l.DUE_DATE BETWEEN SYSDATE AND SYSDATE + 30;

BEGIN
    FOR rec IN c_loans LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan for Customer ID ' ||
            rec.CUSTOMER_ID ||
            ' is due on ' ||
            TO_CHAR(rec.due_date, 'DD-MON-YYYY')
        );
    END LOOP;
END;
/
