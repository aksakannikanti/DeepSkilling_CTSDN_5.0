CREATE TABLE accounts (
    account_id NUMBER PRIMARY KEY,
    balance NUMBER
);

INSERT INTO accounts VALUES (1, 5000);
INSERT INTO accounts VALUES (2, 3000);
INSERT INTO accounts VALUES (3, 7000);
INSERT INTO accounts VALUES (4, 9000);

COMMIT;

select * from accounts;

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_from_account IN accounts.account_id%TYPE,
    p_to_account   IN accounts.account_id%TYPE,
    p_amount       IN NUMBER
)
IS
    v_balance accounts.balance%TYPE;
BEGIN
    -- Check balance
    SELECT balance
    INTO v_balance
    FROM accounts
    WHERE account_id = p_from_account;

    IF v_balance >= p_amount THEN

        UPDATE accounts
        SET balance = balance - p_amount
        WHERE account_id = p_from_account;

        UPDATE accounts
        SET balance = balance + p_amount
        WHERE account_id = p_to_account;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Transfer Successful');

    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');
    END IF;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Account not found');
END;
/

BEGIN
    TransferFunds(1, 2, 500);
END;
/

select * from accounts;