/*Usually when you buy something, you’re asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don’t want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into ‘#’. Examples (input –> output):

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->             
                */
import { test } from "@/test.ts";


function maskify(input: string, visiabelLength = 4) {
  if (input.length < visiabelLength) return input;
  let maskedLength = input.length - visiabelLength;
  let maskedInput = "#".repeat(maskedLength);
  return maskedInput + input.slice(-visiabelLength);
}
test(maskify("4556364607935616" ), "############5616");
test(maskify("64607935616"),  "#######5616");
test(maskify("1"), "1");
test(maskify(""), "");


