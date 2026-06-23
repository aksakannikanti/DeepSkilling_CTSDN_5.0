CREATE TABLE savings_accounts (
    account_id NUMBER PRIMARY KEY,
    balance NUMBER
);
INSERT INTO savings_accounts VALUES (1, 10000);
INSERT INTO savings_accounts VALUES (2, 20000);
INSERT INTO savings_accounts VALUES (3, 15000);
INSERT INTO savings_accounts VALUES (4, 21000);
commit;
select * from savings_accounts;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN
    UPDATE savings_accounts
    SET balance = balance + (balance * 0.01);

    COMMIT;
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/

select * from savings_accounts;