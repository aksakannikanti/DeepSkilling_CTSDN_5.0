CREATE TABLE employees (
    emp_id NUMBER PRIMARY KEY,
    dept_id NUMBER,
    salary NUMBER
);

INSERT INTO employees VALUES (101, 10, 50000);
INSERT INTO employees VALUES (102, 10, 60000);
INSERT INTO employees VALUES (103, 20, 57000);
INSERT INTO employees VALUES (104, 20, 70000);
commit;

select * from employees;
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_dept_id IN employees.dept_id%TYPE,
    p_bonus_percent IN NUMBER
)
IS
BEGIN
    UPDATE employees
    SET salary = salary + (salary * p_bonus_percent / 100)
    WHERE dept_id = p_dept_id;

    COMMIT;
END;
/

BEGIN
    UpdateEmployeeBonus(10, 10);
END;
/

select * from employees;
