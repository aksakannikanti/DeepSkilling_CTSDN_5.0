package MockitoExample;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;
import org.junit.Test;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        // Create mock object
        ExternalApi mockApi = mock(ExternalApi.class);

        // Stub method
        when(mockApi.getData()).thenReturn("Mock Data");

        // Inject mock into service
        MyService service = new MyService(mockApi);

        // Execute method
        String result = service.fetchData();

        // Verify result
        assertEquals("Mock Data", result);

        // Verify interaction
        verify(mockApi).getData();
    }
}