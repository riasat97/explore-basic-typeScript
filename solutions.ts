type dataType= string | number;
const getLengthOrNumber= (param: dataType): number=>{
    if(typeof param === 'string')
    return param.length;
    else
    return param*param;
}


interface Person {
    address?: Address;
    phone?: string;
}
type Address= {
    city: string;
    street: string;
}
type dType= string | undefined;
function getAddressCity(person: Person): dType {
    return person.address?.city;
}


type strOrNum= number | string;
function getTotalIfNum(mixedData: strOrNum[]): number {
    let sum: number = 0;

    for (const item of mixedData) {
        if (typeof item === 'number') {
            sum += item as number;
        }
    }
    return sum;
}


interface Car {
    make: string;
    model: string;
    year: number;
}
interface Driver {
    name: string;
    licenseNumber: string;
}

type carAndDriver= { car: Car; driver: Driver }
function mergeCarWithDriver(car: Car, driver: Driver): carAndDriver {
    return {
        car: {
            make: car.make,
            model: car.model,
            year: car.year
        },
        driver: {
            name: driver.name,
            licenseNumber: driver.licenseNumber
        }
    };
}

const getSumIfArrOrLogError = (input: unknown): void => {
    if (Array.isArray(input) && input.every((item) => typeof item === 'number')) {
        const total: number = (input as number[]).reduce((acc, num) => acc + num, 0);
        console.log(`Sum of numbers: ${total}`);
    } else {
        console.error("Error: The input is not an array of numbers.");
    }
};

function findFirstOccurrence<T>(array: T[], target: T): number {
    const index = array.indexOf(target);
    return index !== -1 ? index : -1;
}


interface Product {
    name: string;
    price: number;
    quantity: number;
}

function getTotal(cart: Product[]): number {
    return cart.reduce((total, product) => total + product.price * product.quantity, 0);
}