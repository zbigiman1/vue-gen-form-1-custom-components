import { fireEvent, render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import PasswordField from '../components/PasswordField.vue'

describe('PasswordField.vue', () => {
  it('renders password field and shows password on button click', async () => {

    const { getByRole, getByPlaceholderText } = render(PasswordField, {
        props: {
            name: "password",
            label: "Password",
            modelValue: '',
            type: 'password',
            errors: [],
            pristine: ref(true)
        }
    })

    const passwordField = getByPlaceholderText('Password')
    expect(passwordField.getAttribute('type')).toBe('password')

    const button = getByRole('button')
    await fireEvent.click(button)
    expect(passwordField.getAttribute('type')).toBe('text')
  })
})