import random

# The given output values
out = [354, 112, 297, 119, 306, 369, 111, 108, 333, 110, 112, 92, 111, 315, 104, 102, 285, 102, 303, 100, 112, 94, 111, 285, 97, 351, 113, 98, 108, 118, 109, 119, 98, 94, 51, 56, 159, 50, 53, 153, 100, 144, 98, 51, 53, 303, 99, 52, 49, 128]

# Define the operations
ops = [
    lambda x: x + 3,
    lambda x: x - 3,
    lambda x: x * 3,
    lambda x: x ^ 3,
]

# Inverse operations corresponding to the above ops
inverse_ops = [
    lambda x: x - 3,
    lambda x: x + 3,
    lambda x: x // 3,  # Assume integer division
    lambda x: x ^ 3,
]

# Set the random seed
random.seed(1337)

# Determine the sequence of operations applied
applied_ops = [random.choice(ops) for _ in range(len(out))]

# Reverse the operations to get the original values
original_values = []

for i in range(len(out)):
    operation = applied_ops[i]
    inverse_operation = inverse_ops[ops.index(operation)]
    original_value = inverse_operation(out[i])
    original_values.append(original_value)
flag_string = ''.join(chr(value) for value in original_values)


print(flag_string)
